// Import icon Services dari assets
import webDevelopment from '../assets/web-development.png';
import mobileApp from '../assets/mobile-app-development.png';
import uiux from '../assets/ui-ux-design.png';
import cloud from '../assets/cloud-solutions.png';
import software from '../assets/software-development.png';
import infrastructure from '../assets/it-infrastructure.png';
import cybersecurity from '../assets/cybersecurity-services.png';
import qa from '../assets/qa-solutions.png';
import consulting from '../assets/it-consulting-support.png';
import portfolio1 from '../assets/portfolio-1.png';
import portfolio2 from '../assets/portfolio-2.png';
import portfolio3 from '../assets/portfolio-3.png';
import industryFintech from '../assets/industry-fintech.png';
import industryEcommerce from '../assets/industry-ecommerce.png';
import industryHealthcare from '../assets/industry-healthcare.png';
import johnLee from '../assets/john-lee.png';
import sarahTan from '../assets/sarah-tan.png';
import emilyChen from '../assets/emily-chen.png';

import type {
  Stat,
  ProcessStep,
  Service,
  Industry,
  Portfolio,
  Testimonial,
  Faq,
} from '../types';

/* Menu navigasi (dipakai di Navbar & Footer) */
export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Service', href: '#service' },
  { label: 'Projects', href: '#projects' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'FAQ', href: '#faq' },
];

/* Logo brand pada bagian "Trusted by" */
export const brands = [
  'upwork',
  'zoom',
  'POSTMAN',
  'databricks',
  'airbnb',
  'Dropbox',
  'PayPal',
];

/* Statistik */
export const stats: Stat[] = [
  { value: '50+', label: 'Projects Delivered' },
  { value: '5+', label: 'Years of Experience' },
  { value: '10+', label: 'Industry Awards Won' },
  { value: '100%', label: 'Client Satisfaction Rate' },
];

/* Langkah-langkah proses kerja */
export const processSteps: ProcessStep[] = [
  {
    id: 1,
    title: 'Discovery & Consultation',
    description: 'Understand Your Needs & Goals',
  },
  {
    id: 2,
    title: 'Planning & Strategy',
    description: 'Build a Clear, Scalable Roadmap',
  },
  {
    id: 3,
    title: 'Design & Prototyping',
    description: 'Craft UX That Converts',
  },
  {
    id: 4,
    title: 'Development & Implementation',
    description: 'Deliver With Speed & Precision',
  },
  {
    id: 5,
    title: 'Testing & Optimization',
    description: 'Ensure Quality at Every Step',
  },
  {
    id: 6,
    title: 'Launch & Growth',
    description: 'Scale, Measure & Improve Continuously',
  },
];

/* Daftar layanan (9 kartu) */
export const services: Service[] = [
  {
    icon: webDevelopment,
    title: 'Web Development',
    description: 'Build fast, scalable, and SEO-friendly websites.',
  },
  {
    icon: mobileApp,
    title: 'Mobile App Development',
    description: 'Native & cross-platform apps tailored to user needs.',
  },
  {
    icon: uiux,
    title: 'UI/UX Design',
    description: 'Delight users with intuitive and beautiful interfaces.',
  },
  {
    icon: cloud,
    title: 'Cloud Solutions',
    description: 'Secure and flexible cloud infrastructure for your growth.',
  },
  {
    icon: software,
    title: 'Software Development',
    description: 'Custom solutions built around your business logic.',
  },
  {
    icon: infrastructure,
    title: 'IT Infrastructure',
    description: 'Scale your backend with reliable tech foundations.',
  },
  {
    icon: cybersecurity,
    title: 'Cybersecurity Services',
    description: 'Stay protected with enterprise-grade security.',
  },
  {
    icon: qa,
    title: 'QA Solutions',
    description: 'Ensure performance with rigorous testing frameworks.',
  },
  {
    icon: consulting,
    title: 'IT Consulting & Support',
    description: 'Make smarter tech decisions with expert guidance.',
  },
];

/* Tab industri */
export const industries: Industry[] = [
  {
    name: 'Fintech',
    description:
      'We build secure, scalable, and compliant fintech solutions — from digital wallets to core banking systems — tailored to modern financial needs.',
    image: industryFintech,
  },
  {
    name: 'E-Commerce',
    description:
      'Boost your online sales with fast, reliable platforms designed for seamless shopping experiences, inventory management, and payment integration.',
    image: industryEcommerce,
  },
  {
    name: 'Healtcare',
    description:
      'Empowering healthcare providers with digital solutions that improve patient care, ensure data privacy, and streamline operational workflows.',
    image: industryHealthcare,
  },
];

/* Kartu portfolio */
export const portfolios: Portfolio[] = [
  { category: 'Landing Page', title: 'Portofolio 1', image: portfolio1 },
  { category: 'Landing Page', title: 'Portofolio 2', image: portfolio2 },
  { category: 'Landing Page', title: 'Portofolio 3', image: portfolio3 },
];

/* Testimoni */
export const testimonials: Testimonial[] = [
  {
    quote:
      'It was a game-changer for our project. The team turned our idea into reality efficiently and effectively.',
    name: 'John Lee',
    role: 'Founder at Innovate Corp',
    avatar: johnLee,
    rating: 4,
  },
  {
    quote:
      'The team delivered exactly what we needed — on time and with outstanding quality. Their attention to detail and communication were top-notch.',
    name: 'Sarah Tan',
    role: 'Product Manager at Finovate',
    avatar: sarahTan,
    rating: 5,
  },
  {
    quote:
      'The collaboration was seamless and beyond expectations. Their expertise truly made the project successful.',
    name: 'Emily Chua',
    role: 'Marketing Head at Techly',
    avatar: emilyChen,
    rating: 3,
  },
];

/* FAQ */
export const faqs: Faq[] = [
  {
    question: 'What services do you offer?',
    answer:
      'We provide custom web/app development, cloud solutions, UX/UI design, and more.',
  },
  {
    question: 'How do I know if this is right for my business?',
    answer:
      'We start with a free consultation to understand your goals and recommend the best approach for your needs.',
  },
  {
    question: 'How much does a project cost?',
    answer:
      'Cost depends on scope and complexity. We provide a transparent quote after the discovery phase.',
  },
  {
    question: 'How long does it take?',
    answer:
      'Timelines vary by project, but most engagements run from a few weeks to a few months.',
  },
  {
    question: 'Can I start with a small project first?',
    answer:
      'Absolutely. Many clients begin with a small pilot project before scaling up with us.',
  },
];

/* Opsi service pada form kontak */
export const serviceOptions = [
  'Web Development',
  'Cloud Solutions',
  'Mobile App Development',
  'Software Development',
  'UI/UX Design',
  'Other',
];
