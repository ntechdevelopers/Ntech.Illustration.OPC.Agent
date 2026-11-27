// SPDX-License-Identifier: MIT
// Copyright (c) 2026 NtechDevelopers
//
// Entry: sets up the demo environment, loads the office stylesheets and renders the office markup, whose boot component
// starts the 3D office.
import { createRoot } from 'react-dom/client';

import './env';
import './office.css';

// Loaded only after every static import has run, so the office modules always see the environment set up by ./env,
// whatever order an import sorter puts the lines above in.
const container = document.getElementById('root');
if (container) {
    void import('./vendor/App').then(({ default: App }) => createRoot(container).render(<App />));
}
