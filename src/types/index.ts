import type { ReactNode } from 'react';

/**
 * Type Definitions
 * Semua interface & type yang dipakai di banyak komponen.
 */

// ==========================================
// UI Component Types
// ==========================================

// Varian gaya tombol (mengikuti pola design system)
export type ButtonVariant = 'primary' | 'secondary' | 'outline';

// Props untuk komponen Button yang reusable
export interface ButtonProps {
  children: ReactNode; // isi tombol (teks/icon)
  variant?: ButtonVariant; // gaya tombol
  href?: string; // jika diisi, render sebagai <a>
  onClick?: () => void;
  className?: string;
}

// ==========================================
// Section Data Types
// ==========================================

// Satu item statistik (mis. "50+ Projects Delivered")
export interface Stat {
  value: string;
  label: string;
}

// Satu langkah pada bagian "Our Process"
export interface ProcessStep {
  id: number;
  title: string;
  description: string;
}

// Satu kartu layanan pada bagian "Services"
export interface Service {
  icon: string; // path gambar icon (hasil import dari assets)
  title: string;
  description: string;
}

// Satu tab industri pada bagian "Built for Your Industry"
export interface Industry {
  name: string;
  description: string;
  image: string;
}

// Satu kartu portfolio
export interface Portfolio {
  category: string;
  title: string;
  image: string;
}

// Satu testimoni
export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  avatar: string;
  rating: number;
}

// Satu pertanyaan FAQ
export interface Faq {
  question: string;
  answer: string;
}

// Item menu navigasi
export interface NavItem {
  label: string;
  href: string;
}
