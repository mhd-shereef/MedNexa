# MedNexa — Intelligent Healthcare Infrastructure & Ecosystem

<div align="center">

![MedNexa Platform](https://img.shields.io/badge/Platform-MedNexa%20Health%20OS-0C1A2E?style=for-the-badge&logoColor=white)
![Next.js 14](https://img.shields.io/badge/Next.js-14.0-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.3-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![HIPAA Ready](https://img.shields.io/badge/Security-HIPAA%20Compliant-0D3A35?style=for-the-badge)

<p align="center">
  <b>Uniting predictive risk screening with specialized clinical electronic medical records.</b>
</p>

[Explore Diagnox ↗](https://diagnox-healthcare.vercel.app/) • [Explore DERMA ↗](https://github.com/mhd-shereef/Derma)

</div>

---

## 🌐 The MedNexa Vision

**MedNexa** is an integrated health technology platform engineered for the modern medical continuum. By connecting consumer-grade predictive risk screening with hospital-grade electronic medical records, MedNexa bridges the critical gap between early symptom detection and specialized physician consultation.

```
                               ┌─────────────────────────────────────────┐
                               │           MedNexa Ecosystem             │
                               │      Next.js 14 Unified Health Hub      │
                               └────────────────────┬────────────────────┘
                                                    │
                      ┌─────────────────────────────┴─────────────────────────────┐
                      ▼                                                           ▼
       ┌─────────────────────────────┐                             ┌─────────────────────────────┐
       │           Diagnox           │                             │            DERMA            │
       │    AI Health Risk Index     │                             │   Dermatology Clinical OS   │
       │  Predictive Risk Screening  │                             │   EMR, Imaging & Practice   │
       │  diagnox-healthcare.vercel  │                             │    mhd-shereef/Derma        │
       └─────────────────────────────┘                             └─────────────────────────────┘
```

---

## 💎 Core Products

### 1. Diagnox — AI-Assisted Health Risk Screening
An intuitive, patient-facing diagnostic intelligence engine designed to detect chronic disease markers and provide actionable health observations before clinical symptoms escalate.

- **Multi-Factor Risk Indices**: Evaluates personalized risk markers for cardiovascular wellness, type-2 diabetes, and early-stage oncological risk indicators.
- **Explainable Health Metrics**: Transparent scoring algorithms that inform patients without replacing licensed physician evaluation.
- **Seamless Provider Referral**: Directly feeds structured health questionnaires and biometric observations into physician consultation queues.
- **Live Platform**: [diagnox-healthcare.vercel.app](https://diagnox-healthcare.vercel.app/)

---

### 2. DERMA — Aesthetic Dermatology Clinical OS
A specialized, multi-tenant clinical operating system built from the ground up for medical and aesthetic dermatology practices.

- **Standardized Photographic Mapping**: Calibrated multi-angle photo documentation with automated before/after comparative analysis.
- **Vector Anatomical Charting**: High-precision lesion tracking across 12 standard anatomical planes with ICD-10 diagnostic indexing.
- **Real-Time Patient Flow**: WebSocket-driven clinical queue managing registration, triage, consultation, and procedure recovery.
- **GST-Compliant Clinical Billing**: Procedure packages, automated product consumption tracking, and tax-ready invoice generation.
- **Repository & Architecture**: [github.com/mhd-shereef/Derma](https://github.com/mhd-shereef/Derma)

---

## 🏛 Platform Architecture

| Pillar | Technology | Implementation Detail |
| :--- | :--- | :--- |
| **Frontend Framework** | Next.js 14 (App Router) | Server-side rendering, dynamic route segmentation, optimized bundle splitting |
| **User Interface** | Tailwind CSS + Radix UI | Custom medical aesthetic design system, dark-mode ready tokens, WCAG 2.1 AA accessible |
| **Typography & Styling** | Inter & Playfair Display | Editorial serif typography paired with high-legibility clinical interfaces |
| **State & Data Fetching** | TanStack Query + Zustand | Reactive client state with optimistic cache updates and WebSocket event listening |
| **Security Architecture** | HIPAA & GDPR Aligned | End-to-end TLS 1.3 encryption, role-based access control (RBAC), immutable audit logging |

---

## 🛡 Security & Compliance Standards

- **Tenant Isolation**: Strictly enforced database and object store isolation ensuring complete data segregation between clinical practices.
- **Encrypted Photo Storage**: Medical photography is stored in private, encrypted S3 buckets and accessed exclusively via short-lived, signed URLs.
- **Audit Trails**: Every clinician view, update, export, and record modification is recorded in an immutable append-only audit log.
- **Zero-Trust Token Rotation**: Short-lived JWT access tokens paired with cryptographically secure, rotating refresh tokens.

---

<div align="center">
  <sub>Proprietary Software. Copyright © MedNexa Health Systems. All rights reserved.</sub>
</div>
