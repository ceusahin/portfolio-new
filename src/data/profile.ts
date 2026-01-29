import type { PortfolioData } from '@/types'

export const portfolioData: PortfolioData = {
  profile: {
    name: 'Hakan Şahin',
    title: { 
      tr: 'Full-Stack Developer', 
      en: 'Full-Stack Developer' 
    },
    location: { 
      tr: 'Sakarya, Türkiye', 
      en: 'Sakarya, Turkey' 
    },
    email: 'hakonsahin@gmail.com',
  
    shortBio: {
      tr: 'Kullanıcı odaklı, problem çözmeyi seven Full-Stack Developer. React & TypeScript ile modern arayüzler, Node.js ve Spring Boot ile ölçeklenebilir backend çözümleri geliştiriyorum.',
      en: 'User-focused and problem-solving Full-Stack Developer. I build modern interfaces with React & TypeScript and scalable backend solutions with Node.js and Spring Boot.',
    },
  
    longBio: {
      tr: 'Gerçek dünya problemlerini çözen, sürdürülebilir ve ölçeklenebilir yazılımlar geliştirmeye odaklanıyorum. Kurumsal CMS, e-ticaret, gerçek zamanlı uygulamalar ve oyun odaklı platformlar üzerinde full-stack projeler geliştirdim. Temiz kod, performans ve kullanıcı deneyimi her zaman önceliğim.',
      en: 'I focus on building sustainable and scalable software that solves real-world problems. I have developed full-stack projects including corporate CMS platforms, e-commerce applications, real-time systems, and game-oriented products. Clean code, performance, and user experience are always my priorities.',
    },
  
    currently: {
      tr: 'React, TypeScript, Next.js ve gerçek zamanlı uygulamalarda performans optimizasyonu üzerine çalışıyorum.',
      en: 'Currently focusing on React, TypeScript, Next.js, and performance optimization in real-time applications.',
    },
  
    openToWork: true,
  
    socials: [
      { 
        id: 'linkedin', 
        label: { tr: 'LinkedIn', en: 'LinkedIn' }, 
        url: 'https://linkedin.com/in/hakansahin', 
        icon: 'linkedin' 
      },
      { 
        id: 'github', 
        label: { tr: 'GitHub', en: 'GitHub' }, 
        url: 'https://github.com/ceusahin', 
        icon: 'github' 
      },
    ],

    avatarUrl: '/cv-pp.jpg',

    cvUrl: { 
      tr: '/cv-tr.pdf', 
      en: '/cv-en.pdf' 
    },
  },
  

  skills: [
    {
      id: 'frontend',
      name: { tr: 'Frontend', en: 'Frontend' },
      items: [
        {
          name: 'React',
          level: 4,
          keywords: ['Hooks', 'Context API', 'Redux', 'Performance'],
          descriptionLocalized: {
            tr: 'SPA mimarisi, state yönetimi ve performans odaklı bileşenler.',
            en: 'SPA architecture, state management, and performance-focused components.',
          },
        },
        {
          name: 'Next.js',
          level: 4,
          keywords: ['App Router', 'SSR', 'API Routes', 'PWA'],
          descriptionLocalized: {
            tr: 'SSR, App Router, middleware ve PWA destekli uygulamalar.',
            en: 'SSR, App Router, middleware, and PWA-enabled applications.',
          },
        },
        {
          name: 'TypeScript',
          level: 4,
          keywords: ['Types', 'Generics', 'DTO', 'Type Safety'],
          descriptionLocalized: {
            tr: 'Tip güvenliği, okunabilir ve sürdürülebilir frontend & backend kodu.',
            en: 'Type safety and maintainable frontend & backend code.',
          },
        },
        {
          name: 'Tailwind CSS',
          level: 5,
          keywords: ['Responsive', 'Dark Mode', 'UI Systems'],
          descriptionLocalized: {
            tr: 'Responsive, modern ve yeniden kullanılabilir arayüz tasarımı.',
            en: 'Responsive, modern, and reusable UI design.',
          },
        },
        {
          name: 'HTML / CSS',
          level: 5,
          keywords: ['Semantic HTML', 'Flexbox', 'Grid', 'Accessibility'],
          descriptionLocalized: {
            tr: 'Semantik HTML, erişilebilirlik ve modern CSS layout teknikleri.',
            en: 'Semantic HTML, accessibility, and modern CSS layout techniques.',
          },
        },
      ],
    },
    {
      id: 'backend',
      name: { tr: 'Backend', en: 'Backend' },
      items: [
        {
          name: 'Node.js',
          level: 4,
          keywords: ['REST API', 'JWT', 'Socket.IO'],
          descriptionLocalized: {
            tr: 'REST API, JWT kimlik doğrulama ve gerçek zamanlı uygulamalar.',
            en: 'REST APIs, JWT authentication, and real-time applications.',
          },
        },
        {
          name: 'Spring Boot',
          level: 5,
          keywords: ['REST', 'JPA', 'Security'],
          descriptionLocalized: {
            tr: 'Kurumsal seviyede REST API, JPA ve Spring Security.',
            en: 'Enterprise-grade REST APIs with JPA and Spring Security.',
          },
        },
        {
          name: 'PHP (Pure)',
          level: 3,
          keywords: ['CMS', 'CRM', 'PDO', 'Security'],
          descriptionLocalized: {
            tr: 'Framework kullanmadan CMS ve CRM altyapıları geliştirme.',
            en: 'Building CMS and CRM systems without frameworks.',
          },
        },
        {
          name: 'SQL',
          level: 4,
          keywords: ['PostgreSQL', 'MySQL', 'Schema Design'],
          descriptionLocalized: {
            tr: 'İlişkisel veritabanı tasarımı ve performanslı sorgular.',
            en: 'Relational database design and performant queries.',
          },
        },
        {
          name: 'MongoDB',
          level: 3,
          keywords: ['NoSQL', 'Realtime Data'],
          descriptionLocalized: {
            tr: 'Gerçek zamanlı uygulamalar için NoSQL veri modelleme.',
            en: 'NoSQL data modeling for real-time applications.',
          },
        },
      ],
    },
    {
      id: 'tools',
      name: { tr: 'Araçlar', en: 'Tools' },
      items: [
        {
          name: 'Git',
          level: 4,
          keywords: ['Branching', 'Pull Request', 'Code Review'],
          descriptionLocalized: {
            tr: 'GitFlow, branch yönetimi ve code review süreçleri.',
            en: 'GitFlow, branch management, and code review workflows.',
          },
        },
        {
          name: 'Docker',
          level: 3,
          keywords: ['Container', 'Deployment'],
          descriptionLocalized: {
            tr: 'Backend servisleri için temel containerization ve deploy.',
            en: 'Basic containerization and deployment for backend services.',
          },
        },
        {
          name: 'Vite',
          level: 4,
          keywords: ['Fast Build', 'Dev Server'],
          descriptionLocalized: {
            tr: 'Hızlı geliştirme ortamı ve optimize build süreçleri.',
            en: 'Fast development environment and optimized builds.',
          },
        },
        {
          name: 'Prisma',
          level: 3,
          keywords: ['ORM', 'Migrations'],
          descriptionLocalized: {
            tr: 'Type-safe ORM, migration ve veri erişim katmanı.',
            en: 'Type-safe ORM, migrations, and data access layer.',
          },
        },
      ],
    },
  ],
  

  projects: [
    // nikutek
    {
      id: 'nikutek',
      featured: true,
      titleLocalized: { tr: 'Nikutek – Kurumsal Site & Admin Panel', en: 'Nikutek – Corporate Website & Admin Panel' },
      descriptionLocalized: {
        tr: 'Çok dilli (TR/EN), tamamen yönetilebilir kurumsal web platformu. Güçlü admin paneli, Spring Boot backend ve React arayüzü.',
        en: 'Fully manageable, multilingual (TR/EN) corporate web platform with a powerful admin panel, Spring Boot backend and React frontend.',
      },
      problemLocalized: {
        tr: 'Kurumsal sitelerin çok dilli, yönetilebilir ve tek backend ile birden fazla siteyi yönetebilmesi ihtiyacı.',
        en: 'Need for corporate sites to be multilingual, manageable and to run multiple sites from a single backend.',
      },
      solutionLocalized: {
        tr: 'React + Context API ile frontend; Spring Boot, PostgreSQL ve çok şemalı mimari ile güvenli REST API. Admin panelinde blog, ürün, SEO, medya ve istatistik yönetimi.',
        en: 'React + Context API on frontend; Spring Boot, PostgreSQL and multi-schema architecture for a secure REST API. Admin panel for blog, products, SEO, media and analytics.',
      },
      resultLocalized: {
        tr: 'İki ayrı site tek backend üzerinden yönetilebiliyor; JWT, Cloudinary ve dark mode ile production-ready kurumsal çözüm.',
        en: 'Two sites managed from a single backend; JWT, Cloudinary and dark mode for a production-ready corporate solution.',
      },
      techDecisionsLocalized: {
        tr: 'Global state için Context API tercih edildi; admin ve public ayrımı için çok şemalı veritabanı ile tek deploy.',
        en: 'Context API for global state; multi-schema database for admin/public separation with a single deployment.',
      },
      tradeoffsLocalized: {
        tr: 'Cloudinary dış servis bağımlılığı; medya yönetimi kolaylığı için kabul edildi.',
        en: 'Cloudinary as external dependency; accepted for easier media management.',
      },
      techStack: ['React', 'Vite', 'TypeScript', 'Tailwind CSS', 'Axios', 'Framer Motion', 'Spring Boot', 'Java 17', 'PostgreSQL', 'JWT', 'Cloudinary', 'Docker'],
      tags: ['Full-stack', 'Frontend', 'Backend'],
      roleLocalized: { tr: 'Full-stack geliştirici', en: 'Full-stack developer' },
      highlightsLocalized: [
        { tr: 'Çok dilli içerik yönetimi (TR / EN)', en: 'Multilingual content management (TR / EN)' },
        { tr: 'Gelişmiş admin paneli (blog, ürün, SEO, medya, istatistik)', en: 'Advanced admin panel (blog, products, SEO, media, analytics)' },
        { tr: 'JWT tabanlı güvenli giriş ve otomatik oturum sonlandırma', en: 'Secure JWT-based auth with auto-logout' },
        { tr: 'SEO uyumlu slug tabanlı dinamik sayfalar', en: 'SEO-friendly slug-based dynamic pages' },
        { tr: 'İki siteyi tek backend ile yöneten çok şemalı mimari', en: 'Multi-schema architecture managing two sites from one backend' },
      ],
      links: [
        { type: 'live', url: 'https://nikutek.com.tr/#/' },
        { type: 'repo', url: 'https://github.com/ceusahin/nikutek' },
      ],
    },
    // brsm-website
    {
          id: 'brsm-website',
          featured: true,
          titleLocalized: { tr: 'BRSM Website – Kurumsal Site, CMS & CRM', en: 'BRSM Website – Corporate Website, CMS & CRM' },
          descriptionLocalized: {
            tr: 'Framework kullanılmadan Pure PHP ile kurumsal site, CMS ve CRM. Tek giriş noktası (index.php), PDO, rol bazlı yetkilendirme, Excel dışa aktarım.',
            en: 'Corporate site, CMS and CRM in pure PHP without frameworks. Single entry point (index.php), PDO, role-based auth, Excel export.',
          },
          problemLocalized: {
            tr: 'Hafif, framework bağımlılığı olmayan kurumsal site + CMS + CRM; içerik ve iş süreçlerinin tek panelden yönetimi.',
            en: 'Lightweight corporate site + CMS + CRM without framework lock-in; managing content and business processes from one panel.',
          },
          solutionLocalized: {
            tr: 'Pure PHP 7.4+, MySQL/MariaDB, PDO. HTML/CSS/JS ile responsive frontend. Blog, hizmetler, referanslar, SSS, hero yönetimi; çoklu medya yükleme; QR Menü. CRM: müşteriler, görüşmeler, teklifler, projeler, ödemeler; PhpSpreadsheet ile Excel export.',
            en: 'Pure PHP 7.4+, MySQL/MariaDB, PDO. Responsive frontend with HTML/CSS/JS. Blog, services, references, FAQ, hero management; multi media upload; QR Menu. CRM: customers, meetings, offers, projects, payments; Excel export via PhpSpreadsheet.',
          },
          resultLocalized: {
            tr: 'SEO dostu slug yapısı, XSS ve SQL Injection korumaları, koyu temalı admin arayüzü; tek backend ile kurumsal + CRM ihtiyaçları karşılandı.',
            en: 'SEO-friendly slugs, XSS and SQL injection protections, dark-themed admin UI; corporate and CRM needs met with one backend.',
          },
          techStack: ['PHP 7.4+', 'MySQL', 'PDO', 'HTML5', 'CSS3', 'JavaScript', 'Composer', 'PhpSpreadsheet'],
          tags: ['Full-stack', 'Backend', 'Frontend'],
          roleLocalized: { tr: 'Full-stack geliştirici', en: 'Full-stack developer' },
          highlightsLocalized: [
            { tr: 'Framework kullanılmadan hafif ve yüksek performanslı backend', en: 'Lightweight, high-performance backend without frameworks' },
            { tr: 'SEO dostu slug bazlı dinamik sayfa ve içerik yönetimi', en: 'SEO-friendly slug-based dynamic pages and content' },
            { tr: 'Rol ve izin bazlı gelişmiş admin paneli', en: 'Advanced role-based admin panel' },
            { tr: 'CRM modülü ve Excel (.xlsx) dışa aktarımı', en: 'CRM module with Excel (.xlsx) export' },
            { tr: 'QR Menü altyapısı, oturum tabanlı güvenli giriş', en: 'QR Menu infrastructure, session-based secure login' },
          ],
          links: [
            { type: 'live', url: 'https://nikunipompa.com/' },
            { type: 'repo', url: 'https://github.com/ceusahin/brsm-website' },
          ],
    },
    // multiplayer-pixel-game
    {
      id: 'multiplayer-pixel-game',
      featured: true,
      titleLocalized: { tr: 'Multiplayer Pixel Game – Gerçek Zamanlı Canvas', en: 'Multiplayer Pixel Game – Real-Time Collaborative Canvas' },
      descriptionLocalized: {
        tr: 'Kullanıcıların aynı tuvalde gerçek zamanlı piksel yerleştirdiği çok oyunculu piksel sanat oyunu. React + Canvas API, Node.js + Socket.IO.',
        en: 'Real-time multiplayer pixel art game where users place pixels on a shared canvas. React + Canvas API, Node.js + Socket.IO.',
      },
      problemLocalized: {
        tr: 'Düşük gecikmeli, gerçek zamanlı çok oyunculu bir çizim deneyimi ve adil oyun için rate limiting ihtiyacı.',
        en: 'Need for low-latency real-time multiplayer drawing and rate limiting for fair gameplay.',
      },
      solutionLocalized: {
        tr: 'React ve Canvas API ile yüksek FPS çizim; Node.js, Express ve Socket.IO ile WebSocket senkronizasyonu. JWT kimlik doğrulama ve 30 sn rate limit.',
        en: 'High-FPS drawing with React and Canvas API; WebSocket sync with Node.js, Express and Socket.IO. JWT auth and 30s rate limit per pixel.',
      },
      resultLocalized: {
        tr: '1000x1000 ortak canvas, 12 renk paleti, 1000+ eşzamanlı kullanıcı hedefi, ~60 FPS render, <100ms gecikme hedefi.',
        en: '1000x1000 shared canvas, 12-color palette, 1000+ concurrent users, ~60 FPS rendering, <100ms latency target.',
      },
      techDecisionsLocalized: {
        tr: 'Sunucu tarafında tuval state’i tek kaynak; rate limiting ile kötüye kullanım ve sunucu yükü azaltıldı.',
        en: 'Canvas state as single source of truth on server; rate limiting to reduce abuse and server load.',
      },
      tradeoffsLocalized: {
        tr: 'MongoDB ile doküman tabanlı tuval verisi; yazma yoğunluğu için uygun, ölçeklenebilir yapı.',
        en: 'MongoDB for document-based canvas data; suitable for write-heavy, scalable design.',
      },
      techStack: ['React', 'Tailwind CSS', 'Canvas API', 'Socket.IO Client', 'Node.js', 'Express.js', 'Socket.IO', 'MongoDB', 'JWT'],
      tags: ['Full-stack', 'Frontend', 'Backend'],
      roleLocalized: { tr: 'Full-stack geliştirici', en: 'Full-stack developer' },
      highlightsLocalized: [
        { tr: 'Gerçek zamanlı çok oyunculu piksel yerleştirme', en: 'Real-time multiplayer pixel placement' },
        { tr: '1000x1000 ortak canvas, 12 renk paleti', en: '1000x1000 shared canvas, 12-color palette' },
        { tr: 'WebSocket ile anlık tuval senkronizasyonu', en: 'Instant canvas sync via WebSockets' },
        { tr: 'Rate limiting ve JWT ile güvenlik', en: 'Rate limiting and JWT for security' },
        { tr: 'Zoom, piksel geçmişi, aktif kullanıcı sayısı', en: 'Zoom, pixel history, active user count' },
      ],
      links: [
        { type: 'live', url: 'https://multiplayer-pixel-game.vercel.app/' },
        { type: 'repo', url: 'https://github.com/ceusahin/multiplayer-pixel-game' },
      ],
      metrics: { users: '1000+', performance: '~60 FPS' },
    },
    // base-app
    {
      id: 'base-app',
      featured: true,
      titleLocalized: { tr: 'BASE App – Oyun Takım Arkadaşı Eşleşme', en: 'BASE App – Game Teammate Matching Platform' },
      descriptionLocalized: {
        tr: 'Oyuncuların oyun, rütbe ve tarza göre uyumlu takım arkadaşı bulduğu platform. Swipe, karşılıklı beğeni ile eşleşme, 1-1 sohbet. Next.js full-stack.',
        en: 'Platform for gamers to find compatible teammates by game, rank and playstyle. Swipe, match on mutual likes, 1-to-1 chat. Next.js full-stack.',
      },
      problemLocalized: {
        tr: 'Oyuncuların aynı oyunu oynayan, rütbe/tarz uyumlu takım arkadaşı bulması; topluluk kalitesinin korunması.',
        en: 'Gamers need to find teammates who play the same games with compatible rank and playstyle; community quality must be maintained.',
      },
      solutionLocalized: {
        tr: 'Next.js App Router ile tek kod tabanı; swipe keşif, karşılıklı beğenide otomatik eşleşme, mesajlaşma. API Routes + PostgreSQL + Prisma, JWT (httpOnly cookie). Davranış puanı ve içerik filtresi.',
        en: 'Single codebase with Next.js App Router; swipe discovery, auto-match on mutual likes, messaging. API Routes + PostgreSQL + Prisma, JWT (httpOnly cookie). Behavior score and content moderation.',
      },
      resultLocalized: {
        tr: 'PWA ve Capacitor ile Web, Android ve iOS; kullanıcı puanlama ve küfür filtresi ile sürdürülebilir topluluk.',
        en: 'Web, Android and iOS via PWA and Capacitor; user ratings and profanity filter for a sustainable community.',
      },
      techDecisionsLocalized: {
        tr: 'Next.js API Routes ile full-stack tek repo; httpOnly cookie ile XSS’e karşı JWT güvenliği.',
        en: 'Next.js API Routes for single-repo full-stack; httpOnly cookie for JWT security against XSS.',
      },
      tradeoffsLocalized: {
        tr: 'Capacitor ile native build; tek kod tabanı avantajı, native performans sınırları kabul edildi.',
        en: 'Native builds via Capacitor; single codebase benefit accepted over native performance limits.',
      },
      techStack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'PWA', 'PostgreSQL', 'Prisma', 'JWT', 'Capacitor', 'Zod', 'bcrypt'],
      tags: ['Full-stack', 'Frontend', 'Backend'],
      roleLocalized: { tr: 'Full-stack geliştirici', en: 'Full-stack developer' },
      highlightsLocalized: [
        { tr: 'Swipe tabanlı eşleşme ve karşılıklı beğenide otomatik match', en: 'Swiipe-based matching and auto-match on mutual likes' },
        { tr: 'Oyun, rütbe ve davranış puanına göre filtreleme', en: 'Filtering by game, rank and behavior score' },
        { tr: 'Eşleşme sonrası 1-1 sohbet ve okundu bilgisi', en: '1-to-1 messaging with read receipts after match' },
        { tr: 'JWT httpOnly cookie ile güvenli kimlik doğrulama', en: 'Secure JWT authentication with httpOnly cookie' },
        { tr: 'Kullanıcı puanlama, davranış skoru ve içerik moderasyonu', en: 'User ratings, behavior scoring and content moderation' },
      ],
      links: [
        { type: 'live', url: '#' },
        { type: 'repo', url: 'https://github.com/ceusahin/base-app' },
      ],
    },
    // harcagitsin
    {
      id: 'harcagitsin',
      featured: true,
      titleLocalized: { tr: 'HarcaGitsin – E-Ticaret Frontend', en: 'HarcaGitsin – E-Commerce Frontend Application' },
      descriptionLocalized: {
        tr: 'React tabanlı modern e-ticaret frontend. Ürün keşfi, kategori, sepet; Redux ile state yönetimi; Workintech eğitim projesi.',
        en: 'Modern e-commerce frontend with React. Product discovery, categories, cart; Redux for state management; Workintech training project.',
      },
      problemLocalized: {
        tr: 'Çok sayfalı mağaza deneyimi, merkezi kullanıcı/ürün/sepet yönetimi ve rol bazlı kayıt ihtiyacı.',
        en: 'Need for multi-page store experience, centralized user/product/cart state and role-based registration.',
      },
      solutionLocalized: {
        tr: 'React 19 + Vite + React Router ile SPA; Redux, Redux Thunk, Redux Logger ile state. React Hook Form ve Axios ile form validasyonu ve API. Ana sayfa, mağaza, ürün detay, kayıt, iletişim ve ekip sayfaları.',
        en: 'SPA with React 19 + Vite + React Router; Redux, Redux Thunk, Redux Logger for state. React Hook Form and Axios for validation and API. Home, store, product detail, signup, contact and team pages.',
      },
      resultLocalized: {
        tr: 'Responsive (mobile, tablet, desktop), Vercel uyumlu production build; Editor’s Picks, Best Seller, Featured Products bileşenleri.',
        en: 'Responsive (mobile, tablet, desktop), Vercel-ready production build; Editor’s Picks, Best Seller, Featured Products components.',
      },
      techStack: ['React 19', 'Vite', 'React Router', 'Tailwind CSS', 'Redux', 'Redux Thunk', 'React Hook Form', 'Axios', 'Lucide React'],
      tags: ['Frontend'],
      roleLocalized: { tr: 'Frontend geliştirici', en: 'Frontend developer' },
      highlightsLocalized: [
        { tr: 'Redux ile merkezi kullanıcı, ürün ve sepet yönetimi', en: 'Centralized user, product and cart management with Redux' },
        { tr: 'Kategori bazlı mağaza ve ürün detay sayfası', en: 'Category-based store and product detail page' },
        { tr: 'Rol bazlı kullanıcı kaydı (müşteri / mağaza)', en: 'Role-based signup (customer / store)' },
        { tr: 'Form validasyonu ve hata yönetimi', en: 'Form validation and error handling' },
        { tr: 'SPA mimarisi ile hızlı sayfa geçişleri', en: 'Fast page transitions with SPA architecture' },
      ],
      links: [
        { type: 'live', url: '#' },
        { type: 'repo', url: 'https://github.com/ceusahin/ecommerce-harcagitsin' },
      ],
    },
    // sahin-ciftligi
    {
          id: 'sahin-ciftligi',
          featured: false,
          titleLocalized: { tr: 'Şahin Çiftliği – Ürün & İçerik Yönetimi', en: 'Şahin Çiftliği – Product & Content Management' },
          descriptionLocalized: {
            tr: 'React ve Spring Boot ile ürün odaklı, yönetilebilir web platformu. Ürün, kategori, cins ve blog; admin paneli ile güvenli yönetim.',
            en: 'Product-focused, manageable web platform with React and Spring Boot. Products, categories, breeds and blog; secure management via admin panel.',
          },
          problemLocalized: {
            tr: 'Ürün ve içerik sunan sitelerin hem ziyaretçi hem admin tarafında tek elden yönetilmesi ihtiyacı.',
            en: 'Need to manage product and content sites for both visitors and admins from a single place.',
          },
          solutionLocalized: {
            tr: 'React + Vite + Tailwind ile responsive public site; Spring Boot REST API, JWT ve PostgreSQL ile admin paneli, dashboard ve istatistikler.',
            en: 'Responsive public site with React + Vite + Tailwind; Spring Boot REST API, JWT and PostgreSQL for admin panel, dashboard and statistics.',
          },
          resultLocalized: {
            tr: 'Katmanlı backend (Controller, Service, Repository, Security), arama ve öne çıkan ürünler; iletişim formu ve mesaj yönetimi.',
            en: 'Layered backend (Controller, Service, Repository, Security), search and featured products; contact form and message management.',
          },
          techStack: ['React', 'Vite', 'Tailwind CSS', 'JWT', 'react-helmet-async', 'Spring Boot', 'Java 17', 'PostgreSQL', 'Spring Security', 'JPA/Hibernate'],
          tags: ['Full-stack', 'Frontend', 'Backend'],
          roleLocalized: { tr: 'Full-stack geliştirici', en: 'Full-stack developer' },
          highlightsLocalized: [
            { tr: 'Responsive ve SEO uyumlu modern frontend', en: 'Responsive and SEO-optimized frontend' },
            { tr: 'Ürün, kategori ve cins yönetimi', en: 'Product, category and breed management' },
            { tr: 'Blog sistemi ve dinamik içerik yönetimi', en: 'Blog and dynamic content system' },
            { tr: 'JWT tabanlı admin girişi ve yetkilendirme', en: 'Secure JWT-based admin authentication' },
            { tr: 'Dashboard ve istatistikler, arama ve öne çıkan ürünler', en: 'Admin dashboard with statistics, search and featured products' },
          ],
          links: [
            { type: 'live', url: '#' },
            { type: 'repo', url: 'https://github.com/ceusahin/SahinCiftligiFrontend' },
          ],
    },
  ],

  experience: [
    {
      id: 'exp-1',
      type: 'education',
      titleLocalized: { tr: 'Metalurji ve Malzeme Mühendisliği', en: 'Metallurgical and Materials Engineering' },
      orgLocalized: { tr: 'Kocaeli Üniversitesi', en: 'Kocaeli University' },
      periodLocalized: { tr: '2019 – 2026', en: '2019 – 2026' },
      descriptionLocalized: { tr: '', en: '' },
      highlightsLocalized: [{ tr: 'KOUSAT - Kocaeli Üniversitesi Sualtı Topluluğu', en: 'KOUSAT - Kocaeli University Underwater Club' }],
      
    },
    {
      id: 'exp-2',
      type: 'job',
      titleLocalized: { tr: 'Lincoln Electric Üretim Stajı', en: 'Lincoln Electric Production Internship' },
      orgLocalized: { tr: 'Lincoln Electric', en: 'Lincoln Electric' },
      periodLocalized: { tr: '2022 – 2023', en: '2022 – 2023' },
      descriptionLocalized: { tr: 'Kocaeli, Türkiye · Stajyerlik', en: 'Kocaeli, Turkey · Internship' },
      
    },
  ],

  sections: {
    hero: true,
    about: true,
    skills: true,
    projects: true,
    experience: true,
    contact: true,
  },

  ui: {
    nav: {
      about: { tr: 'Hakkımda', en: 'About' },
      skills: { tr: 'Yetenekler', en: 'Skills' },
      projects: { tr: 'Projeler', en: 'Projects' },
      experience: { tr: 'Deneyim', en: 'Experience' },
      contact: { tr: 'İletişim', en: 'Contact' },
    },
    hero: {
      ctaProjects: { tr: 'Projeler', en: 'Projects' },
      ctaContact: { tr: 'İletişim', en: 'Contact' },
      statsProjects: { tr: 'Proje', en: 'Projects' },
      statsTech: { tr: 'Teknoloji', en: 'Tech' },
    },
    about: {
      title: { tr: 'Hakkımda', en: 'About' },
      currentlyLabel: { tr: 'Şu an', en: 'Currently' },
    },
    skills: {
      title: { tr: 'Yetenekler', en: 'Skills' },
      levelLabel: { tr: 'Seviye', en: 'Level' },
    },
    projects: {
      title: { tr: 'Projeler', en: 'Projects' },
      subtitle: { tr: 'Etki', en: 'Impact' },
      featured: { tr: 'Öne çıkan', en: 'Featured' },
      all: { tr: 'Tümü', en: 'All' },
      filterFrontend: { tr: 'Frontend', en: 'Frontend' },
      filterBackend: { tr: 'Backend', en: 'Backend' },
      filterFullstack: { tr: 'Full-stack', en: 'Full-stack' },
      searchPlaceholder: { tr: 'Proje ara...', en: 'Search projects...' },
      problem: { tr: 'Sorun', en: 'Problem' },
      solution: { tr: 'Çözüm', en: 'Solution' },
      result: { tr: 'Sonuç', en: 'Result' },
      techDecisions: { tr: 'Teknik kararlar', en: 'Tech decisions' },
      tradeoffs: { tr: 'Ödünler', en: 'Trade-offs' },
      role: { tr: 'Rol', en: 'Role' },
      highlights: { tr: 'Ne yaptım', en: 'What I built' },
      liveSite: { tr: 'Canlı site', en: 'Live site' },
      viewRepo: { tr: 'Repo', en: 'Repo' },
      caseStudy: { tr: 'Örnek inceleme', en: 'Case study' },
      noResults: { tr: 'Proje bulunamadı.', en: 'No projects found.' },
    },
    experience: {
      title: { tr: 'Deneyim & Eğitim', en: 'Experience & Education' },
    },
    contact: {
      title: { tr: 'İletişim', en: 'Contact' },
      subtitle: { tr: 'Birlikte çalışalım.', en: 'Let\'s work together.' },
      downloadCv: { tr: 'CV İndir', en: 'Download CV' },
      copyEmail: { tr: 'E-postayı kopyala', en: 'Copy email' },
      emailCopied: { tr: 'Kopyalandı!', en: 'Copied!' },
    },
    footer: {
      sitemap: { tr: 'Site haritası', en: 'Sitemap' },
      copyright: { tr: 'Tüm hakları saklıdır.', en: 'All rights reserved.' },
    },
  },
}
