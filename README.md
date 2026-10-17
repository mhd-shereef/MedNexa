# MedNexa — Intelligent Healthcare Infrastructure & Ecosystem

[![Next.js](https://img.shields.io/badge/Next.js-14-000000?logo=nextdotjs&logoColor=white)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.3-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com)
[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?logo=vercel&logoColor=white)](https://vercel.com)

**MedNexa** is an integrated health technology platform uniting predictive wellness screening with specialized clinical electronic medical records.

---

## 🌐 The MedNexa Ecosystem

```
                               ┌─────────────────────────────┐
                               │           MedNexa           │
                               │      (Ecosystem Portal)     │
                               │     Next.js 14 on Vercel    │
                               └──────────────┬──────────────┘
                                              │
                      ┌───────────────────────┴───────────────────────┐
                      ▼                                               ▼
       ┌─────────────────────────────┐                 ┌─────────────────────────────┐
       │           Diagnox           │                 │            DERMA            │
       │    AI Health Risk Index     │                 │   Dermatology Clinical OS   │
       │   Early Disease Screening   │                 │   EMR, Imaging & Practice   │
       │  diagnox-healthcare.vercel  │                 │    mhd-shereef/Derma        │
       └─────────────────────────────┘                 └─────────────────────────────┘
```

### Products:
1. **[Diagnox](https://diagnox-healthcare.vercel.app/)** — AI-assisted health analysis for multi-factor cardiovascular, diabetes, and oncological risk screening.
2. **[DERMA](https://github.com/mhd-shereef/Derma)** — Cloud-based electronic medical record (EMR) designed specifically for aesthetic dermatology practices (photographic mapping, live queue, visit templates, and GST billing).

---

## 🚀 Deployment (Vercel)

Deploying the MedNexa portal to Vercel takes 1 minute:

1. Go to [Vercel Dashboard](https://vercel.com/dashboard) → **Add New…** → **Project**.
2. Select your repository: **`mhd-shereef/MedNexa`**.
3. **Framework Preset**: `Next.js` *(automatically detected)*.
4. **Root Directory**: `./` *(leave default)*.
5. *(Optional)* Add Environment Variables if you want custom domains for the products:
   - `NEXT_PUBLIC_DIAGNOX_URL`: `https://diagnox-healthcare.vercel.app/`
   - `NEXT_PUBLIC_DERMA_URL`: `https://your-derma-frontend.vercel.app`
6. Click **Deploy**!

---

## 💻 Local Development

```bash
# 1. Install dependencies
npm install

# 2. Run the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the live portal.

---

## 📄 License
Proprietary. Copyright (c) MedNexa Health Systems. All rights reserved.
