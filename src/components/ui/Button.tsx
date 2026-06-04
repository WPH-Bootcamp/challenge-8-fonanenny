/**
 * Button Component - EXAMPLE FILE
 *
 * File ini adalah CONTOH implementasi Button component.
 * Kamu bisa menggunakan ini sebagai reference atau
 * membuat implementasi sendiri dari scratch.
 *
 * Untuk menggunakan:
 * 1. Rename file ini menjadi Button.tsx (hapus .example)
 * 2. Adjust styling sesuai design Figma
 * 3. Add more variants jika diperlukan
 */

import type { ReactNode } from 'react';
import type { ButtonVariant } from '../../types';

/*
  Button: komponen tombol reusable.
  - variant : gaya tombol (primary / secondary / outline)
  - size    : ukuran (sm / md / lg)
  - href    : kalau diisi, tombol dirender sebagai link <a>
  - type    : untuk form (button / submit / reset)
  - disabled: menonaktifkan tombol
*/

type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  className?: string;
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  type = 'button',
  disabled = false,
  className = '',
}: ButtonProps) {
  // Style dasar yang selalu dipakai
  const base =
    'inline-flex items-center justify-center rounded-full font-semibold transition-all duration-200 cursor-pointer';

  // Style per variant — disesuaikan dengan design Figma (oranye + tema gelap)
  const variants = {
    primary:
      'bg-primary text-white hover:bg-primary-dark shadow-lg shadow-primary/30 hover:-translate-y-0.5',
    secondary:
      'bg-surface text-white hover:bg-surface-2 border border-border-soft',
    outline: 'border border-white/20 text-white hover:bg-white/10',
  };

  // Style per ukuran
  const sizes = {
    sm: 'px-5 py-2 text-sm',
    md: 'px-7 py-3 text-sm',
    lg: 'px-8 py-4 text-base',
  };

  // Style saat disabled
  const disabledStyle = disabled ? 'opacity-50 cursor-not-allowed' : '';

  // Gabungkan semua class
  const classes = `${base} ${variants[variant]} ${sizes[size]} ${disabledStyle} ${className}`;

  // Kalau ada href -> render sebagai link
  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  // Selain itu -> render sebagai button biasa
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
    >
      {children}
    </button>
  );
}

/**
 * USAGE EXAMPLES:
 *
 * // Primary button (default)
 * <Button onClick={handleClick}>Click Me</Button>
 *
 * // Secondary variant
 * <Button variant="secondary">Secondary</Button>
 *
 * // Outline variant with large size
 * <Button variant="outline" size="lg">Large Outline</Button>
 *
 * // Disabled state
 * <Button disabled>Disabled</Button>
 *
 * // With custom classes
 * <Button className="w-full">Full Width Button</Button>
 *
 * // Submit button for forms
 * <Button type="submit" variant="primary">Submit</Button>
 */

/**
 * TODO untuk kamu:
 * 1. Lihat button styles di Figma design
 * 2. Update colors sesuai design system (primary color, etc)
 * 3. Adjust padding, border-radius, font-size
 * 4. Add more variants jika diperlukan (e.g., 'ghost', 'link')
 * 5. Consider adding icon support:
 *    - leftIcon prop
 *    - rightIcon prop
 * 6. Add loading state jika diperlukan
 * 7. Test semua variants dan sizes
 */
