/*
  SectionHeader: judul + subjudul yang dipakai berulang di hampir setiap section
  (Stats, Process, Services, Portfolio, Testimonials).
  Dibuat reusable supaya tidak menulis ulang struktur yang sama.
*/
interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  align?: 'center' | 'left'; // posisi teks
}

export default function SectionHeader({
  title,
  subtitle,
  align = 'center',
}: SectionHeaderProps) {
  const alignment = align === 'center' ? 'text-center mx-auto' : 'text-left';

  return (
    <div className={`max-w-2xl ${alignment}`}>
      <h2 className='text-3xl md:text-4xl font-bold text-white'>{title}</h2>
      {subtitle && (
        <p className='mt-3 text-sm md:text-base text-muted'>{subtitle}</p>
      )}
    </div>
  );
}
