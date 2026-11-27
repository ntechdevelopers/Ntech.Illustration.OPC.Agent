// SPDX-License-Identifier: MIT
// Copyright (c) 2026 NtechDevelopers
//
// Static build of the 3D office demo. BASE_PATH sets where the site is served from (for example
// /Ntech.Illustration.OPC.Agent/ on GitHub Pages); the office builds its asset URLs from the same value.
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

const base = `/${(process.env.BASE_PATH ?? '').replace(/^\/+|\/+$/g, '')}/`.replace(/^\/\/$/, '/');
const basePath = base.replace(/\/$/, '');

export default defineConfig({
    base,
    plugins: [react()],
    // The office reads these build variables; the demo is always the static, server-less mode.
    define: {
        'process.env.NEXT_PUBLIC_OFFICE_STATIC': JSON.stringify('1'),
        'process.env.NEXT_PUBLIC_BASE_PATH': JSON.stringify(basePath),
        'process.env.NEXT_PUBLIC_SITE_ROOT': JSON.stringify(basePath),
    },
    build: {
        chunkSizeWarningLimit: 4000,
    },
});
