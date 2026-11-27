// SPDX-License-Identifier: MIT
// Copyright (c) 2026 NtechDevelopers
//
// Brand shown in the top bar: the Ntech Developers mark, the name (?brand= or
// the default) and a link to the Ntech Developers site.
import logoMark from './assets/ntechdevelopers-mark.png';

export const DEFAULT_BRAND_NAME = 'Ntech Developers';
export const BRAND_HREF = 'https://ntechdevelopers.com';

export interface OfficeBrand {
    name: string;
    href: string;
    mark: string;
}

export const officeBrand = (): OfficeBrand => ({
    name: document.documentElement.dataset.brand || DEFAULT_BRAND_NAME,
    href: BRAND_HREF,
    mark: logoMark,
});
