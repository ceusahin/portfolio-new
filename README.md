# Portfolio — Full-Stack Developer

HR/Recruiter odaklı, tamamen statik, React + TypeScript + Vite ile geliştirilmiş portfolio sitesi. Tüm içerik tek bir data dosyasından beslenir; TR/EN i18n ve dark/light tema destekler.

---

## İçindekiler

- [Özellikler](#özellikler)
- [Teknoloji Stack](#teknik-stack)
- [Gereksinimler](#gereksinimler)
- [Kurulum](#kurulum)
- [NPM Scriptleri](#npm-scriptleri)
- [Geliştirme](#geliştirme)
- [Build ve Önizleme](#build-ve-önizleme)
- [İçeriği Güncelleme](#içeriği-güncelleme)
- [Proje Yapısı](#proje-yapısı)
- [Deploy](#deploy)
- [Sorun Giderme](#sorun-giderme)
- [Lisans](#lisans)

---

## Özellikler

| Özellik | Açıklama |
|--------|----------|
| **Data-driven** | Tüm metin ve içerik `src/data/profile.ts` üzerinden yönetilir |
| **i18n** | Türkçe (varsayılan) ve İngilizce; dil tercihi `localStorage` ile kalıcı |
| **Tema** | Dark/Light mod; `localStorage` + `prefers-color-scheme` ile uyumlu |
| **Erişilebilirlik** | Semantic HTML, `aria-label`, klavye navigasyonu, focus ring, reduced-motion desteği |
| **SEO** | Meta etiketleri, OpenGraph, Twitter cards, `sitemap.xml`, `robots.txt` |
| **Performans** | Code splitting (Framer Motion lazy), Lighthouse 90+ hedefi |

---

## Teknik Stack

| Kategori | Teknoloji |
|----------|-----------|
| Framework | React 18 |
| Dil | TypeScript 5.6 |
| Build | Vite 5 |
| Stil | Tailwind CSS 3, PostCSS, Autoprefixer |
| Animasyon | Framer Motion |
| İkonlar | Lucide React |
| Lint | ESLint 9, TypeScript ESLint |

---

## Gereksinimler

- **Node.js** 18 veya üzeri ([nodejs.org](https://nodejs.org))
- **npm** veya **yarn** / **pnpm**

Sürüm kontrolü:

```bash
node -v   # v18.x.x veya üzeri
npm -v    # 9.x veya üzeri
```

---

## Kurulum

1. Repoyu klonlayın:

```bash
git clone https://github.com/kullaniciadi/portfolio-new.git
cd portfolio-new
```

2. Bağımlılıkları yükleyin:

```bash
npm install
```

---

## NPM Scriptleri

| Komut | Açıklama |
|-------|----------|
| `npm run dev` | Geliştirme sunucusunu başlatır (`http://localhost:5173`) |
| `npm run build` | TypeScript derlemesi + production build; çıktı `dist/` |
| `npm run preview` | `dist/` içeriğini yerel olarak sunar (production benzeri test) |
| `npm run lint` | ESLint ile tüm projeyi tarar |

---

## Geliştirme

```bash
npm run dev
```

Tarayıcıda **http://localhost:5173** açılır. Kaynak dosyalarda yaptığınız değişiklikler hot-reload ile yansır.

---

## Build ve Önizleme

**Production build:**

```bash
npm run build
```

- TypeScript önce `tsc -b` ile kontrol edilir, ardından Vite build çalışır.
- Çıktı **`dist/`** klasöründe oluşur.

**Build sonrası yerel önizleme:**

```bash
npm run preview
```

Bu komut `dist/` klasörünü sunar; canlı ortama deploy etmeden önce test için kullanılır.

---

## İçeriği Güncelleme

Tüm kişisel bilgiler, projeler, yetenekler ve deneyim **tek dosyadan** yönetilir.

| Kaynak | Açıklama |
|--------|----------|
| **`src/data/profile.ts`** | İsim, özet, projeler, yetenekler, deneyim, iletişim, UI metinleri |
| **`src/types/index.ts`** | Tipler: `LocalizedString`, `Project`, `SkillCategory`, `Experience` vb. |
| **UI metinleri** | `portfolioData.ui` altında; buton, başlık, placeholder gibi tüm etiketler |

**Örnekler:**

- **İsim değiştirmek:** `profile.name` alanını güncelleyin.
- **Proje eklemek:** `projects` dizisine `{ id, title, description, tags, link, ... }` formatında yeni nesne ekleyin.
- **Çok dilli metin:** Her metin alanı `{ tr: '...', en: '...' }` formatında olmalı.

Deploy sonrası `public/robots.txt`, `public/sitemap.xml` ve `index.html` içindeki site URL’ini kendi domain’inizle değiştirmeyi unutmayın.

---

## Proje Yapısı

```
portfolio-new/
├── public/                 # Statik dosyalar (favicon, cv, robots, sitemap)
├── src/
│   ├── components/
│   │   ├── layout/         # Navbar, Footer, ScrollProgress
│   │   └── ui/             # Button, Card, Modal, Badge, Tag, SectionTitle, Container, Tooltip, Toggle
│   ├── contexts/           # I18nContext
│   ├── data/
│   │   └── profile.ts      # Tek veri kaynağı (içerik + UI metinleri)
│   ├── hooks/              # useTheme, useI18n, useScrollSpy, useReducedMotion
│   ├── sections/           # Hero, About, Skills, Projects, Experience, Contact
│   ├── styles/
│   │   └── index.css       # Tailwind + base stiller
│   ├── types/
│   │   └── index.ts        # TypeScript tipleri
│   ├── utils/              # cn, getLocalized (i18n)
│   ├── App.tsx
│   ├── main.tsx
│   └── vite-env.d.ts
├── index.html
├── package.json
├── tailwind.config.js
├── tsconfig.json
├── vite.config.ts
└── README.md
```

---

## Deploy

| Platform | Build Command | Output / Publish Directory |
|----------|----------------|----------------------------|
| **Vercel** | `npm run build` | `dist` |
| **Netlify** | `npm run build` | `dist` |
| **GitHub Pages** | `npm run build` | `dist` (veya repo’ya `dist` push) |

Deploy sonrası:

1. **`public/robots.txt`** ve **`public/sitemap.xml`** içindeki `https://yoursite.com` adresini kendi domain’inizle değiştirin.
2. **`index.html`** içindeki meta `og:url`, `canonical`, `title` ve `description` alanlarını güncelleyin.

---

## Sorun Giderme

| Sorun | Öneri |
|-------|--------|
| `npm run build` hata veriyor | `npm run lint` çalıştırıp TypeScript/ESLint hatalarını düzeltin; `node_modules` silip `npm install` tekrarlayın. |
| Port 5173 kullanımda | `vite.config.ts` içinde `server.port` ile farklı port tanımlayın. |
| Tema/dil sıfırlanıyor | Tarayıcıda localStorage’ı temizlemeyin; geliştirme için varsayılanları `useTheme` / `useI18n` içinde de kontrol edebilirsiniz. |
| Stiller yüklenmiyor | `src/main.tsx` içinde `import './styles/index.css'` olduğundan emin olun; Tailwind sınıfları `tailwind.config.js` content yollarına uygun olsun. |

---

## Lisans

MIT
