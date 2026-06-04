import { useState } from 'react';
import SectionHeader from '../ui/SectionHeader';
import { industries } from '../../data';

/*
  Industries: "Built for Your Industry".
  - Kiri: tab (Fintech, E-Commerce, Healtcare).
  - Kanan: deskripsi + gambar yang berubah sesuai tab aktif.
  useState menyimpan index tab yang dipilih.
*/
export default function Industries() {
  const [active, setActive] = useState(0);
  const current = industries[active];

  return (
    <section className='px-5 py-16 md:px-10'>
      <div className='mx-auto max-w-6xl'>
        <SectionHeader
          title='Built for Your Industry'
          subtitle="We've helped companies across industries launch smarter, faster, and more securely."
          align='left'
        />

        <div className='mt-10 grid gap-8 md:grid-cols-[200px_1fr]'>
          {/* Daftar tab */}
          <div className='flex gap-4 md:flex-col md:gap-2'>
            {industries.map((industry, index) => (
              <button
                key={industry.name}
                onClick={() => setActive(index)}
                className={`border-l-2 pl-3 text-left text-base transition-colors ${
                  active === index
                    ? 'border-primary font-semibold text-primary'
                    : 'border-border-soft text-muted hover:text-white'
                }`}
              >
                {industry.name}
              </button>
            ))}
          </div>

          {/* Konten tab aktif */}
          <div>
            <p className='text-sm text-white/90 md:text-base'>
              {current.description}
            </p>
            <img
              src={current.image}
              alt={current.name}
              className='mt-6 h-64 w-full rounded-2xl object-cover md:h-80'
            />
          </div>
        </div>
      </div>
    </section>
  );
}
