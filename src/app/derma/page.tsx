'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowRight,
  ArrowLeft,
  ArrowUpRight,
  Camera,
  FileText,
  Stethoscope,
  Shield,
  Activity,
  CheckCircle2,
  Zap,
  Lock,
  ClipboardList,
} from 'lucide-react';
import toast from 'react-hot-toast';

const clinicalModules = [
  {
    title: 'Standardized Dermoscopic & Macro Photography',
    description:
      'Calibrated, cross-polarized photography with fixed anatomical projection grids. Longitudinal comparison sliders for tracking lesion evolution over time.',
    icon: Camera,
    color: 'bg-emerald-50 text-emerald-800 border-emerald-200',
  },
  {
    title: 'Anatomical Vector Charting & Dosage Tracking',
    description:
      'Interactive facial and body vector landmarks for mapping neuromodulator units, filler injection depths, and laser treatment passes directly onto visual diagrams.',
    icon: Stethoscope,
    color: 'bg-sky-50 text-sky-800 border-sky-200',
  },
  {
    title: 'Laser Device Parameter & Fluence Registry',
    description:
      'Structured logging for every device used — wavelength, pulse duration, fluence, spot size, cooling parameters — linked to the patient encounter and body region.',
    icon: Zap,
    color: 'bg-amber-50 text-amber-800 border-amber-200',
  },
  {
    title: 'Biopsy Chain-of-Custody & Histopathology Linking',
    description:
      'Barcoded biopsy requisitions tied to the anatomical site in the patient record with immutable specimen transport tracking and pathology result integration.',
    icon: ClipboardList,
    color: 'bg-rose-50 text-rose-800 border-rose-200',
  },
];

const capabilities = [
  'Structured SOAP note documentation with 90-second sign-off target',
  'Calibrated photography with fixed anatomical projection grids',
  'Interactive facial & body vector charting for injectables and lasers',
  'Barcoded biopsy requisitions with chain-of-custody tracking',
  'Compounded Rx & topical formulation prescribing',
  'Immutable audit logs with 21 CFR Part 11 electronic sign-off',
  'Multi-provider encounter management & clinical queue',
  'Role-based access for doctors, nurses, receptionists, and administrators',
];

const handleDemoLogin = async () => {
  try {
    const response = await fetch('/api/demo-login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    });

    const data = await response.json();

    if (data.success) {
      toast.success('Welcome to DERMA Demo!');
      window.location.href = '/dashboard';
    } else {
      toast.error('Demo login failed. Please try again.');
    }
  } catch {
    toast.error('Demo login failed. Please try again.');
  }
};

export default function DermaShowcasePage() {
  return (
    <div className="min-h-screen bg-[#FAF6EF] text-[#0C1A2E] font-sans selection:bg-[#0D3A35] selection:text-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-[#FAF6EF]/90 backdrop-blur-md border-b border-[#0C1A2E]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 h-16 flex items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-[#0C1A2E]/70 hover:text-[#0C1A2E] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to MedNexa</span>
          </Link>
          <div className="flex items-center gap-3">
            <span className="text-[10px] font-semibold px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 uppercase tracking-wider">
              Clinical EMR
            </span>
            <span className="font-serif font-bold text-lg text-[#0C1A2E]">DERMA</span>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative pt-16 pb-20 px-4 sm:px-8 max-w-7xl mx-auto">
        <div className="max-w-3xl space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#0C1A2E]/15 text-xs font-semibold tracking-wider text-[#0C1A2E] uppercase shadow-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-600" />
            <span>Electronic Medical Records · Dermatology Clinical OS</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#0C1A2E] leading-[1.1]">
            The Purpose-Built EMR for{' '}
            <span className="italic font-normal">Dermatologists</span> &{' '}
            <span className="italic font-normal">Clinical Practices</span>
          </h1>

          <p className="text-base sm:text-lg text-[#0C1A2E]/80 leading-relaxed max-w-2xl">
            Generic EHRs force dermatologists into rigid, unstructured text boxes. DERMA provides
            structured clinical documentation engineered specifically for medical, surgical, and
            aesthetic dermatology — visual anatomical vector charting, calibrated dermoscopic photo
            surveillance, laser parameter registries, and biopsy chain-of-custody tracking in a
            single HIPAA-compliant workspace.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <button
              onClick={handleDemoLogin}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#0D3A35] hover:bg-[#134E48] text-white font-semibold text-sm transition-all shadow-md hover:shadow-lg active:scale-95"
            >
              <span>Launch Live Clinical DEMO</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white hover:bg-[#FAF6EF] text-[#0C1A2E] font-semibold text-sm border border-[#0C1A2E]/20 transition-all shadow-sm active:scale-95"
            >
              <span>Back to Ecosystem</span>
            </Link>
          </div>
        </div>

        {/* Trust bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-10 border-t border-[#0C1A2E]/10 mt-10 text-xs text-[#0C1A2E]/70">
          <div>
            <strong className="block text-[#0C1A2E] font-semibold">Photographic Grids</strong>
            <span>Standardized projection angles</span>
          </div>
          <div>
            <strong className="block text-[#0C1A2E] font-semibold">Vector Landmarks</strong>
            <span>Anatomical dosage tracking</span>
          </div>
          <div>
            <strong className="block text-[#0C1A2E] font-semibold">Biopsy Custody</strong>
            <span>Barcoded histopathology linking</span>
          </div>
          <div>
            <strong className="block text-[#0C1A2E] font-semibold">Electronic Sign-Off</strong>
            <span>Immutable 21 CFR Part 11</span>
          </div>
        </div>
      </section>

      {/* Clinical Modules */}
      <section className="py-16 px-4 sm:px-8 max-w-7xl mx-auto">
        <div className="max-w-2xl space-y-3 mb-12">
          <p className="text-xs font-bold tracking-widest uppercase text-[#FF4D3D]">
            Physician Charting Modules
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0C1A2E]">
            Four pillars of clinical documentation.
          </h2>
          <p className="text-sm text-[#0C1A2E]/70 leading-relaxed">
            Each module addresses a specific documentation burden dermatologists face daily.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {clinicalModules.map((mod, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 sm:p-8 border border-[#0C1A2E]/10 shadow-sm hover:shadow-md transition-shadow space-y-4"
            >
              <div className="flex items-start gap-4">
                <div
                  className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 border ${mod.color}`}
                >
                  <mod.icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-bold text-[#0C1A2E]">
                    {mod.title}
                  </h3>
                  <p className="text-sm text-[#0C1A2E]/70 mt-1 leading-relaxed">
                    {mod.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Full Capabilities */}
      <section className="py-16 px-4 sm:px-8 max-w-7xl mx-auto">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#0C1A2E]/10 shadow-sm">
          <div className="max-w-2xl space-y-3 mb-8">
            <p className="text-xs font-bold tracking-widest uppercase text-emerald-700">
              EMR Capabilities
            </p>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#0C1A2E]">
              Everything a dermatology practice needs.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {capabilities.map((cap, idx) => (
              <div key={idx} className="flex items-start gap-3 text-sm text-[#0C1A2E]/80">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <span>{cap}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security & Compliance */}
      <section className="py-16 px-4 sm:px-8 max-w-7xl mx-auto">
        <div className="bg-[#0C1A2E] text-white rounded-3xl p-8 sm:p-12 shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-3">
              <Shield className="w-8 h-8 text-emerald-400" />
              <h3 className="font-serif text-xl font-bold">HIPAA-Compliant</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                End-to-end encryption in transit and at rest. Clinical photographs stored with
                short-lived authenticated access tokens.
              </p>
            </div>
            <div className="space-y-3">
              <Lock className="w-8 h-8 text-emerald-400" />
              <h3 className="font-serif text-xl font-bold">Immutable Audit Trail</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Every chart edit, photo view, and signature version is permanently logged.
                Tamper-evident records for malpractice defense.
              </p>
            </div>
            <div className="space-y-3">
              <Activity className="w-8 h-8 text-emerald-400" />
              <h3 className="font-serif text-xl font-bold">Role-Based Access</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Doctor, nurse, receptionist, clinic administrator — each role operates strictly
                within its clinical scope.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 px-4 sm:px-8 max-w-7xl mx-auto text-center">
        <div className="bg-white rounded-3xl p-8 sm:p-16 border border-[#0C1A2E]/10 shadow-sm space-y-6 max-w-3xl mx-auto">
          <p className="text-xs font-bold tracking-widest uppercase text-[#FF4D3D]">
            Try It Now
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0C1A2E]">
            Experience the clinical workspace.
          </h2>
          <p className="text-sm sm:text-base text-[#0C1A2E]/70 max-w-xl mx-auto leading-relaxed">
            Walk through the full DERMA clinical practice demo with pre-filled patient records,
            visit notes, and photographic comparisons. No sign-up required.
          </p>
          <button
            onClick={handleDemoLogin}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#0D3A35] hover:bg-[#134E48] text-white font-semibold text-sm transition-all shadow-md active:scale-95"
          >
            <span>Launch DEMO</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-8 max-w-7xl mx-auto border-t border-[#0C1A2E]/10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#0C1A2E]/50">
          <p>
            © {new Date().getFullYear()} MedNexa Health Systems · DERMA Clinical OS
          </p>
          <Link
            href="/"
            className="text-[#0C1A2E]/50 hover:text-[#0C1A2E] transition-colors"
          >
            Back to MedNexa Ecosystem →
          </Link>
        </div>
      </footer>
    </div>
  );
}
