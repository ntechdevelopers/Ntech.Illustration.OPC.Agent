// SPDX-License-Identifier: MIT
// Copyright (c) 2026 NtechDevelopers
//
// Puts the Ntech Developers ecosystem into the office: 🔗 pins on furniture (shelf, whiteboard, racks, TV, neon…) that
// open a card of links, the same card when the furniture itself is clicked, and ecosystem messages with links posted
// in the group chat now and then. The office calls in through three hooks: ntechPins (after the furniture is built),
// ntechPropClicked (a piece of furniture clicked) and ntechChat (the demo chat started).
import * as THREE from 'three';
import { CSS2DObject } from 'three/addons/renderers/CSS2DRenderer.js';

import { lang as officeLang } from '../vendor/i18n/index.js';
import { scene } from '../vendor/office/scene/renderer.js';
import { CHAT_LINES, type ChatLine, type EcoLink, type Lang, PROP_LINKS, WELCOME } from './ecosystem';

const uiLang = (): Lang => (officeLang() === 'vi' ? 'vi' : 'en');
const hostOf = (href: string) => {
    try {
        return new URL(href).host.replace(/^www\./, '');
    } catch {
        return href;
    }
};
const node = <K extends keyof HTMLElementTagNameMap>(tag: K, cls?: string, text?: string) => {
    const n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text != null) n.textContent = text;
    return n;
};

/* ---------- the link card ---------- */

let card: HTMLElement | null = null;
let cardId: string | null = null;

function closeCard() {
    if (card) card.hidden = true;
    cardId = null;
}

function linkRow(link: EcoLink, lang: Lang) {
    const a = node('a', 'ntc-link');
    a.href = link.href;
    a.target = '_blank';
    a.rel = 'noopener';
    a.append(node('b', undefined, link.label[lang]), node('small', undefined, hostOf(link.href)));
    return a;
}

export function openNtechCard(id: string) {
    const def = PROP_LINKS[id];
    const wrap = document.getElementById('stage-wrap');
    if (!def || !wrap) return;
    if (!card) {
        card = node('section', 'plc ntc');
        card.setAttribute('role', 'dialog');
        card.setAttribute('aria-live', 'polite');
        card.addEventListener('pointerdown', (e) => e.stopPropagation());
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && cardId) closeCard();
        });
        wrap.append(card);
    }
    const lang = uiLang();
    const head = node('header', 'plc-head');
    const ico = node('span', 'plc-ico ntc-ico', '🔗');
    const title = node('div', 'plc-title');
    title.append(node('h3', undefined, def.title[lang]), node('p', undefined, def.about[lang]));
    const close = node('button', 'icon-btn ntc-close', '×');
    close.type = 'button';
    close.setAttribute('aria-label', lang === 'vi' ? 'Đóng' : 'Close');
    close.addEventListener('click', closeCard);
    head.append(ico, title, close);
    const body = node('div', 'plc-body ntc-body');
    for (const link of def.links) body.append(linkRow(link, lang));
    const foot = node('footer', 'plc-foot ntc-foot', 'Ntech Developers · Learn · Share · Build');
    card.replaceChildren(head, body, foot);
    card.setAttribute('aria-label', def.title[lang]);
    card.hidden = false;
    cardId = id;
}

/* ---------- pins on the furniture ---------- */

interface OfficeProp {
    id: string;
    center: THREE.Vector3;
    top: number;
}

const pins: CSS2DObject[] = [];

export function ntechPins(props: Map<string, OfficeProp>) {
    for (const p of pins) p.parent?.remove(p);
    pins.length = 0;
    const lang = uiLang();
    for (const [id, def] of Object.entries(PROP_LINKS)) {
        const p = props.get(id);
        if (!p) continue;
        const btn = node('button', 'ntech-pin');
        btn.type = 'button';
        btn.title = def.title[lang];
        btn.append(node('i', undefined, '🔗'), node('span', undefined, def.pin[lang]));
        btn.addEventListener('pointerdown', (e) => e.stopPropagation());
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            openNtechCard(id);
        });
        // The renderer sets the label element's own transform, so the button sits in a holder and keeps its hover scale.
        const holder = node('div', 'ntech-pin-holder');
        holder.append(btn);
        const obj = new CSS2DObject(holder);
        obj.position.set(p.center.x, p.top + 0.55, p.center.z);
        obj.userData.dynamic = true;
        scene.add(obj);
        pins.push(obj);
    }
}

export function ntechPropClicked(p: { id: string }) {
    if (PROP_LINKS[p.id]) openNtechCard(p.id);
}

/* ---------- the group chat ---------- */

type Say = (from: string, text: string, opts?: Record<string, unknown>) => void;
type Who = (from: string) => unknown;

interface ChatHooks {
    say: Say;
    who: Who;
    people: () => string[];
}

const FIRST_AFTER_MS = 7000;
const EVERY_MIN_MS = 55_000;
const EVERY_MAX_MS = 100_000;
const STAFF_ORDER = ['director', 'hr', 'reception'];

function speaker(line: ChatLine, hooks: ChatHooks): string | null {
    if (line.who === 'agent') {
        const list = hooks.people();
        if (list.length) return list[Math.floor(Math.random() * list.length)];
    }
    for (const s of [line.who, ...STAFF_ORDER]) if (s !== 'agent' && hooks.who(s)) return s;
    const list = hooks.people();
    return list.length ? list[0] : null;
}

function post(line: ChatLine, hooks: ChatHooks, key: string, extra: Record<string, unknown> = {}) {
    const from = speaker(line, hooks);
    if (!from) return false;
    hooks.say(from, line.text(uiLang()), { tag: 'ntech', key, react: ['👍', '❤️', '🔥'], reacts: 3, ...extra });
    return true;
}

let chatStarted = false;

export function ntechChat(hooks: ChatHooks) {
    if (chatStarted) return;
    chatStarted = true;
    let order: number[] = [];
    const next = () => {
        if (!order.length) order = CHAT_LINES.map((_, i) => i).sort(() => Math.random() - 0.5);
        return order.pop() as number;
    };
    // The office's people arrive over the first seconds; until someone can speak, try again shortly.
    const welcome = () => {
        if (!post(WELCOME, hooks, 'ntech:welcome:v1', { pin: true })) window.setTimeout(welcome, 3000);
    };
    const loop = () => {
        const i = next();
        post(CHAT_LINES[i], hooks, `ntech:${i}:${Date.now()}`);
        window.setTimeout(loop, EVERY_MIN_MS + Math.random() * (EVERY_MAX_MS - EVERY_MIN_MS));
    };
    window.setTimeout(welcome, FIRST_AFTER_MS);
    window.setTimeout(loop, FIRST_AFTER_MS + 20_000);
}
