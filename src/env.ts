// SPDX-License-Identifier: MIT
// Copyright (c) 2026 NtechDevelopers
//
// Prepares the document before any office module runs: the office language from ?lang= (vi, en or th, default vi), the
// brand name from ?brand= and the pretend-Mac platform of the online demo.
const OFFICE_LANGUAGES = ['vi', 'en', 'th'];

// The office reads build variables (process.env.NEXT_PUBLIC_*). A production build substitutes them at compile
// time (vite.config.ts); the dev server does not, so they are also provided at runtime. This module runs before any
// office module (see main.tsx).
const basePath = import.meta.env.BASE_URL.replace(/\/$/, '');
const officeGlobal = globalThis as unknown as { process?: { env: Record<string, string> } };
officeGlobal.process = {
    env: {
        ...(officeGlobal.process?.env ?? {}),
        NEXT_PUBLIC_OFFICE_STATIC: '1',
        NEXT_PUBLIC_BASE_PATH: basePath,
        NEXT_PUBLIC_SITE_ROOT: basePath,
    },
};

const params = new URLSearchParams(window.location.search);

const requested = params.get('lang') ?? '';
document.documentElement.lang = OFFICE_LANGUAGES.includes(requested) ? requested : 'vi';
document.documentElement.dataset.os = 'darwin';

const brand = params.get('brand')?.trim();
if (brand) document.documentElement.dataset.brand = brand.slice(0, 80);
