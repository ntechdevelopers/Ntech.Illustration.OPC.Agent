// SPDX-License-Identifier: MIT
// Copyright (c) 2026 NtechDevelopers
//
// The Ntech Developers ecosystem as the office shows it: every public site, channel and featured blog post, the groups
// of links pinned to furniture in the 3D office, and the lines people post in the group chat. Texts come in Vietnamese
// and English; Thai falls back to English.
export type Lang = 'vi' | 'en';
export type Text = Record<Lang, string>;

export interface EcoLink {
    label: Text;
    href: string;
}

const L = (vi: string, en: string, href: string): EcoLink => ({ label: { vi, en }, href });

export const SITE = {
    portal: L('ntechdevelopers.com', 'ntechdevelopers.com', 'https://ntechdevelopers.com'),
    contact: L('Liên hệ hợp tác', 'Contact us', 'https://ntechdevelopers.com/lien-he'),
    blog: L('Blog kỹ thuật', 'Tech blog', 'https://blog.ntechdevelopers.com'),
    ebook: L('Thư viện ebook CNTT', 'IT ebook library', 'https://ebook.ntechdevelopers.com/'),
    uml: L('Ntech UML – vẽ UML online', 'Ntech UML – online UML editor', 'https://uml.ntechdevelopers.com'),
    docs: L('Ntech Docs (Read the Docs)', 'Ntech Docs (Read the Docs)', 'https://ntechdevelopers.readthedocs.io'),
    notebooks: L('Ntech Developers Notebooks', 'Ntech Developers Notebooks', 'https://ntechdevelopers.netlify.app'),
    workspace: L('Xưởng Ntech 3D', 'The Ntech 3D workshop', 'https://ntechdevelopers.com/workingspace'),
    iot3d: L('Showcase IoT 3D – tua-bin gió', 'IoT 3D showcase – wind turbine', 'https://ntechdevelopers.com/showcase-iot-3d'),
    iot2d: L('Showcase IoT 2D – SCADA', 'IoT 2D showcase – SCADA', 'https://ntechdevelopers.com/showcase-iot-2d'),
    wms3d: L('Showcase WMS 3D – bố trí kho', 'WMS 3D showcase – warehouse layout', 'https://ntechdevelopers.com/showcase-plan-wms-3d'),
    bim3d: L('Showcase BIM 3D – thiết kế nhà', 'BIM 3D showcase – house planner', 'https://ntechdevelopers.com/showcase-plan-bim-3d'),
    office3d: L('Showcase văn phòng 3D', '3D office showcase', 'https://ntechdevelopers.com/showcase-office-3d'),
    bookriviu: L('Review sách CNTT (Blogspot)', 'IT book reviews (Blogspot)', 'https://bookriviu.blogspot.com'),
    cBasic: L('Lập trình C cơ bản', 'C programming basics', 'https://laptrinhcbasic.blogspot.com'),
    cAdvanced: L('Lập trình C nâng cao', 'Advanced C programming', 'https://laptrinhcadvanced.blogspot.com'),
    cpp: L('Tài liệu C++ (StormCodes)', 'C++ notes (StormCodes)', 'https://stormcodes.blogspot.com'),
} as const;

export const CHANNEL = {
    fbPage: L('Fanpage Facebook', 'Facebook page', 'https://www.facebook.com/ntechdevelopers'),
    fbGroup: L('Group Facebook cộng đồng', 'Facebook community group', 'https://www.facebook.com/groups/ntechdevelopers'),
    fbEbookPage: L('Fanpage Ebook', 'Ebook Facebook page', 'https://www.facebook.com/ebookntechdevelopers'),
    fbEbookGroup: L('Group Ebook', 'Ebook Facebook group', 'https://www.facebook.com/groups/ebookntechdevelopers'),
    youtube: L('Kênh YouTube', 'YouTube channel', 'https://www.youtube.com/@ntechdevelopers.0'),
    discord: L('Discord Ntech Developers', 'Ntech Developers on Discord', 'https://discord.gg/bCJBxSHS6c'),
    github: L('GitHub ntechdevelopers', 'GitHub ntechdevelopers', 'https://github.com/ntechdevelopers'),
    githubOrg: L('GitHub org ntechdevelopers-com', 'GitHub org ntechdevelopers-com', 'https://github.com/ntechdevelopers-com'),
    cRepo: L('Repo bài giải C/C++', 'C/C++ solutions repo', 'https://github.com/ntechdevelopers/c-cplus'),
    thisRepo: L('Mã nguồn văn phòng 3D này', 'Source of this 3D office', 'https://github.com/ntechdevelopers/Ntech.Illustration.OPC.Agent'),
    linkedin: L('Group LinkedIn', 'LinkedIn group', 'https://www.linkedin.com/groups/13090082'),
    goodreads: L('Goodreads – Review sách CNTT', 'Goodreads – IT book reviews', 'https://www.goodreads.com/group/show/1160277-review-s-ch-c-ng-ngh-th-ng-tin'),
} as const;

const B = 'https://blog.ntechdevelopers.com';
const post = (title: string, slug: string, topic: Text): EcoLink & { topic: Text } => ({ label: { vi: title, en: title }, href: `${B}/${slug}/`, topic });

export const POSTS = [
    post('Upgrade một hệ thống hơn 20 năm từ .NET Framework 2.0 lên .NET 8', 'upgrade-mot-he-thong-hon-20-nam-tu-net-framework-2-0-len-net-8', { vi: 'nâng cấp .NET', en: '.NET migration' }),
    post('CQRS trong .NET 10 với MediatR - Khi nào nên sử dụng và triển khai như thế nào?', 'cqrs-trong-net-10-voi-mediatr-khi-nao-nen-su-dung-va-trien-khai-nhu-the-nao', { vi: 'CQRS', en: 'CQRS' }),
    post('Modular Monolith - Giao tiếp giữa các Module như thế nào cho đúng?', 'modular-monolith-giao-tiep-giua-cac-module-nhu-the-nao-cho-dung', { vi: 'kiến trúc', en: 'architecture' }),
    post('Áp dụng CQRS trong Microservices và hệ quản trị cơ sở dữ liệu riêng biệt', 'ap-dung-cqrs-trong-microservices-va-he-quan-tri-co-so-du-lieu-rieng-biet', { vi: 'microservices', en: 'microservices' }),
    post('Kestrel từ Web Server đến Kiến Trúc gắn liền với Reverse Proxy', 'kestrel-tu-web-server-den-kien-truc-gan-lien-voi-reverse-proxy', { vi: 'web server', en: 'web servers' }),
    post('JSONL (NDJSON) trong .NET - Giải pháp Streaming dữ liệu thời gian thực cho hệ thống AI', 'jsonl-ndjson-trong-net-giai-phap-streaming-du-lieu-thoi-gian-thuc-cho-he-thong-ai', { vi: 'AI streaming', en: 'AI streaming' }),
    post('WPF Vẫn Là Nền Tảng Mạnh Mẽ Cho Ứng Dụng Desktop Doanh Nghiệp Năm 2026', 'wpf-van-la-nen-tang-manh-me-cho-ung-dung-desktop-doanh-nghiep-nam-2026', { vi: 'desktop', en: 'desktop apps' }),
    post('Sự Ra Đời của MVVM và Câu Chuyện Ít Người Biết về WPF', 'su-ra-doi-cua-mvvm-va-cau-chuyen-it-nguoi-biet-ve-windows-presentation-foundation-wpf', { vi: 'MVVM', en: 'MVVM' }),
    post('Xây dựng kiến trúc dự án kiểm thử UI tự động với FlaUI', 'xay-dung-kien-truc-du-an-kiem-thu-ui-tu-dong-voi-flaui', { vi: 'kiểm thử tự động', en: 'UI test automation' }),
    post('Docker không chỉ dành riêng cho Microservices', 'docker-khong-chi-danh-rieng-cho-microservices', { vi: 'Docker', en: 'Docker' }),
    post('Cài Đặt Jenkins Trên VPS Ubuntu', 'cai-dat-jenkins-tren-vps-ubuntu', { vi: 'CI/CD', en: 'CI/CD' }),
    post('Nguyên tắc DRY - Khi Nào Không Lặp Lại Trở Thành Quá Mức?', 'nguyen-tac-dry-khi-nao-khong-lap-lai-tro-thanh-qua-muc', { vi: 'clean code', en: 'clean code' }),
    post('Thời đại AI, viết được code chưa đủ - phải chứng minh là nó chạy', 'thoi-dai-ai-viet-duoc-code-chua-du-phai-chung-minh-la-no-chay', { vi: 'code thời AI', en: 'coding in the AI era' }),
    post('Kỹ Năng Giao Việc Của Technical Leader', 'ky-nang-giao-viec-cua-technical-leader', { vi: 'leadership', en: 'leadership' }),
    post('Hành Trình Bidding Một Dự Án Phần Mềm Enterprise', 'hanh-trinh-bidding-mot-du-an-phan-mem-enterprise', { vi: 'bidding dự án', en: 'project bidding' }),
    post('Mùa nhảy việc', 'mua-nhay-viec', { vi: 'chuyện nghề', en: 'career' }),
    post('Cái giá của "Developer of the year"', 'cai-gia-cua-developer-of-the-year', { vi: 'chuyện nghề', en: 'career' }),
    post('Coding convention trong C/C++', 'coding-convention-trong-c-c', { vi: 'C/C++', en: 'C/C++' }),
    post('Tổng hợp tất cả hàm trong C++', 'tong-hop-tat-ca-ham-trong-c', { vi: 'C++', en: 'C++' }),
    post('Tài liệu luyện thi Olympic tin học', 'tai-lieu-luyen-thi-olympic-tin-hoc', { vi: 'Olympic tin học', en: 'informatics olympiad' }),
];

// Furniture in the office (props.js ids) that carries a pin: its card title, one line on what it is, and its links.
export interface PropLinks {
    pin: Text;
    title: Text;
    about: Text;
    links: EcoLink[];
}

export const PROP_LINKS: Record<string, PropLinks> = {
    shelf: {
        pin: { vi: 'Ebook', en: 'Ebooks' },
        title: { vi: 'Thư viện Ntech', en: 'The Ntech library' },
        about: { vi: 'Hàng trăm ebook CNTT sắp theo roadmap, kèm review sách công nghệ.', en: 'Hundreds of IT ebooks sorted by roadmap, plus tech book reviews.' },
        links: [SITE.ebook, SITE.bookriviu, CHANNEL.goodreads, CHANNEL.fbEbookGroup],
    },
    board: {
        pin: { vi: 'Tài liệu', en: 'Docs' },
        title: { vi: 'Bảng tài liệu & công cụ', en: 'Docs & tools board' },
        about: { vi: 'Roadmap, kiến trúc, coding, testing, sổ tay cho dev và trình vẽ UML.', en: 'Roadmaps, architecture, coding, testing, dev notebooks and a UML editor.' },
        links: [SITE.docs, SITE.notebooks, SITE.uml],
    },
    racks: {
        pin: { vi: 'GitHub', en: 'GitHub' },
        title: { vi: 'Mã nguồn Ntech', en: 'Ntech source code' },
        about: { vi: 'Repo mã nguồn mở của Ntech Developers, gồm cả văn phòng 3D này.', en: 'Open-source repositories of Ntech Developers, this 3D office included.' },
        links: [CHANNEL.github, CHANNEL.githubOrg, CHANNEL.thisRepo, CHANNEL.cRepo],
    },
    tv: {
        pin: { vi: 'YouTube', en: 'YouTube' },
        title: { vi: 'Kênh YouTube', en: 'YouTube channel' },
        about: { vi: 'Video chia sẻ kiến thức lập trình của Ntech Developers.', en: 'Programming videos from Ntech Developers.' },
        links: [CHANNEL.youtube],
    },
    neon: {
        pin: { vi: 'Blog', en: 'Blog' },
        title: { vi: 'Blog kỹ thuật Ntech', en: 'The Ntech tech blog' },
        about: { vi: 'Kiến trúc, DevOps, .NET, C/C++ và bài học từ dự án thật – bài mới mỗi tuần.', en: 'Architecture, DevOps, .NET, C/C++ and lessons from real projects – new posts every week.' },
        links: [SITE.blog, POSTS[0], POSTS[2], POSTS[12]],
    },
    meeting: {
        pin: { vi: 'Cộng đồng', en: 'Community' },
        title: { vi: 'Phòng họp cộng đồng', en: 'Community room' },
        about: { vi: 'Hỏi đáp lập trình mỗi ngày cùng cộng đồng dev Việt.', en: 'Daily programming Q&A with the Vietnamese dev community.' },
        links: [CHANNEL.discord, CHANNEL.fbGroup, CHANNEL.linkedin],
    },
    coffee: {
        pin: { vi: 'Fanpage', en: 'Facebook' },
        title: { vi: 'Góc cà phê – tin mới', en: 'Coffee corner – news' },
        about: { vi: 'Theo dõi tin mới, sự kiện và ebook trên Facebook.', en: 'News, events and ebooks on Facebook.' },
        links: [CHANNEL.fbPage, CHANNEL.fbEbookPage, CHANNEL.fbGroup],
    },
    door: {
        pin: { vi: 'Liên hệ', en: 'Contact' },
        title: { vi: 'Lễ tân Ntech Developers', en: 'Ntech Developers reception' },
        about: { vi: 'Cổng vào hệ sinh thái Ntech và kênh liên hệ hợp tác (contact@ntechdevelopers.com).', en: 'The gateway to the Ntech ecosystem and our contact page (contact@ntechdevelopers.com).' },
        links: [SITE.portal, SITE.contact],
    },
    rocket: {
        pin: { vi: 'Showcase', en: 'Showcases' },
        title: { vi: 'Showcase 3D của Ntech', en: 'Ntech 3D showcases' },
        about: { vi: 'Các bản demo WebGL trên ntechdevelopers.com.', en: 'WebGL demos on ntechdevelopers.com.' },
        links: [SITE.workspace, SITE.iot3d, SITE.iot2d, SITE.wms3d, SITE.bim3d],
    },
    arcade: {
        pin: { vi: 'C/C++', en: 'C/C++' },
        title: { vi: 'Góc Dev C/C++', en: 'The C/C++ corner' },
        about: { vi: 'Tài liệu từ cơ bản đến nâng cao, bài giải và luyện thi Olympic tin học.', en: 'From basics to advanced, solutions and olympiad practice.' },
        links: [SITE.cBasic, SITE.cAdvanced, SITE.cpp, CHANNEL.cRepo, POSTS[19]],
    },
    director: {
        pin: { vi: 'Ntech', en: 'Ntech' },
        title: { vi: 'Ntech Developers', en: 'Ntech Developers' },
        about: { vi: 'Cộng đồng chia sẻ kiến thức lập trình cho dev Việt – Learn · Share · Build.', en: 'A community sharing programming knowledge with Vietnamese developers – Learn · Share · Build.' },
        links: [SITE.portal, SITE.blog, SITE.ebook, SITE.contact],
    },
    trophies: {
        pin: { vi: 'Bài hay', en: 'Top posts' },
        title: { vi: 'Tủ bài viết tiêu biểu', en: 'Featured posts' },
        about: { vi: 'Những bài được đọc nhiều trên blog Ntech.', en: 'Popular posts on the Ntech blog.' },
        links: [POSTS[16], POSTS[1], POSTS[13], POSTS[14]],
    },
};

const md = (l: EcoLink, lang: Lang) => `[${l.label[lang]}](${l.href})`;

// Lines for the group chat, in Markdown (links render as links). `who`: the staff member who says it, or 'agent' for
// one of the session's people in the office.
export interface ChatLine {
    who: 'director' | 'hr' | 'reception' | 'agent';
    text: (lang: Lang) => string;
}

export const WELCOME: ChatLine = {
    who: 'director',
    text: (lang) =>
        lang === 'vi'
            ? `Chào mừng tới văn phòng 3D của **Ntech Developers** 👋 Ghé ${md(SITE.portal, lang)} · ${md(SITE.blog, lang)} · ${md(SITE.ebook, lang)} · ${md(CHANNEL.discord, lang)}. Bấm vào các ghim 🔗 trong văn phòng để xem thêm.`
            : `Welcome to the **Ntech Developers** 3D office 👋 Visit ${md(SITE.portal, lang)} · ${md(SITE.blog, lang)} · ${md(SITE.ebook, lang)} · ${md(CHANNEL.discord, lang)}. Click the 🔗 pins around the office for more.`,
};

const postLines: ChatLine[] = POSTS.map((p) => ({
    who: 'agent',
    text: (lang) =>
        lang === 'vi'
            ? `Đang làm phần ${p.topic.vi} thì đọc lại bài này trên blog Ntech, hay phết: ${md(p, lang)}`
            : `Working on ${p.topic.en}; this post on the Ntech blog helped: ${md(p, lang)}`,
}));

export const CHAT_LINES: ChatLine[] = [
    ...postLines,
    { who: 'hr', text: (lang) => (lang === 'vi' ? `Ai chưa vào cộng đồng thì vào nhé: ${md(CHANNEL.discord, lang)} và ${md(CHANNEL.fbGroup, lang)} 🙌` : `Not in the community yet? Join us: ${md(CHANNEL.discord, lang)} and ${md(CHANNEL.fbGroup, lang)} 🙌`) },
    { who: 'hr', text: (lang) => (lang === 'vi' ? `Video mới trên ${md(CHANNEL.youtube, lang)}, cả nhà subscribe ủng hộ team nha 🎬` : `New video on ${md(CHANNEL.youtube, lang)} – subscribe to support the team 🎬`) },
    { who: 'hr', text: (lang) => (lang === 'vi' ? `Group LinkedIn của Ntech đây, kết nối với các anh chị trong nghề: ${md(CHANNEL.linkedin, lang)}` : `The Ntech LinkedIn group, to connect with fellow developers: ${md(CHANNEL.linkedin, lang)}`) },
    { who: 'reception', text: (lang) => (lang === 'vi' ? `Thư viện ebook CNTT vừa thêm sách mới: ${md(SITE.ebook, lang)} 📚 Review sách thì xem ${md(SITE.bookriviu, lang)}` : `New books in the IT ebook library: ${md(SITE.ebook, lang)} 📚 Reviews at ${md(SITE.bookriviu, lang)}`) },
    { who: 'reception', text: (lang) => (lang === 'vi' ? `Khách hỏi hợp tác thì gửi qua ${md(SITE.contact, lang)} nhé, team phản hồi trong 1-2 ngày làm việc.` : `Partnership questions go to ${md(SITE.contact, lang)}; the team answers within 1–2 working days.`) },
    { who: 'director', text: (lang) => (lang === 'vi' ? `Ai cần vẽ sơ đồ kiến trúc thì dùng ${md(SITE.uml, lang)}, xuất được SVG/PNG/PDF luôn.` : `Need an architecture diagram? Use ${md(SITE.uml, lang)} – exports SVG/PNG/PDF.`) },
    { who: 'director', text: (lang) => (lang === 'vi' ? `Tài liệu nội bộ (roadmap, kiến trúc, testing, mẹo .NET) ở ${md(SITE.docs, lang)}, sổ tay cho người mới ở ${md(SITE.notebooks, lang)}.` : `Roadmaps, architecture, testing and .NET tips live in ${md(SITE.docs, lang)}; starter notebooks in ${md(SITE.notebooks, lang)}.`) },
    { who: 'director', text: (lang) => (lang === 'vi' ? `Tuần này khách ghé xem showcase nhiều: ${md(SITE.iot3d, lang)}, ${md(SITE.wms3d, lang)}, ${md(SITE.bim3d, lang)} 🚀` : `Lots of visitors on the showcases this week: ${md(SITE.iot3d, lang)}, ${md(SITE.wms3d, lang)}, ${md(SITE.bim3d, lang)} 🚀`) },
    { who: 'director', text: (lang) => (lang === 'vi' ? `Văn phòng 3D này là mã nguồn mở, ai muốn góp code thì vào ${md(CHANNEL.thisRepo, lang)} ⭐` : `This 3D office is open source – contributions welcome at ${md(CHANNEL.thisRepo, lang)} ⭐`) },
    { who: 'agent', text: (lang) => (lang === 'vi' ? `Bạn nào mới học C thì xem ${md(SITE.cBasic, lang)} rồi lên ${md(SITE.cAdvanced, lang)}, bài giải ở ${md(CHANNEL.cRepo, lang)}.` : `New to C? Start with ${md(SITE.cBasic, lang)}, then ${md(SITE.cAdvanced, lang)}; solutions in ${md(CHANNEL.cRepo, lang)}.`) },
    { who: 'agent', text: (lang) => (lang === 'vi' ? `Mình theo dõi ${md(CHANNEL.github, lang)} để xem repo mới của team.` : `I follow ${md(CHANNEL.github, lang)} for the team's new repos.`) },
    { who: 'agent', text: (lang) => (lang === 'vi' ? `Ai rảnh vào ${md(SITE.workspace, lang)} xem Xưởng Ntech 3D không, làm bằng Three.js đấy.` : `Have a look at ${md(SITE.workspace, lang)} – the Ntech workshop, built with Three.js.`) },
];
