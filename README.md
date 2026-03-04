# Codex.try

تم تحويل المشروع إلى هيكلية **Next.js App Router** داخل مجلد `portfolio/` حسب المعمارية المطلوبة.

## Architecture

```text
portfolio/
├── app/
│   ├── page.tsx
│   ├── projects/page.tsx
│   ├── about/page.tsx
│   ├── contact/page.tsx
│   ├── layout.tsx
│   └── globals.css
├── components/
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── ProjectCard.tsx
│   └── SkillCard.tsx
├── data/
│   ├── projects.ts
│   └── skills.ts
├── lib/
│   └── utils.ts
├── public/
│   └── images/
└── styles/
```

## التشغيل

```bash
cd portfolio
npm install
npm run dev
```

ثم افتح:

`http://localhost:3000`
