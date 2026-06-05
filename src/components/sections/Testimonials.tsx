import { useState } from 'react';
import { Star } from 'lucide-react';
import SectionHeader from '../ui/SectionHeader';
import { testimonials } from '../../data';
import type { Testimonial } from '../../types';
import quoteIcon from '../../assets/quote.png';

/*
  Testimonials: carousel testimoni.
  - Kartu tengah = testimoni aktif (jelas), kartu samping samar.
  - Dot di bawah untuk berpindah.
  useState menyimpan index testimoni aktif.
*/

function Card({ data, active }: { data: Testimonial; active: boolean }) {
  return (
    <div
      className={`relative flex flex-col gap-3 rounded-2xl border px-6 pb-12 pt-6 transition-all ${
        active
          ? 'border-border-soft bg-surface opacity-100'
          : 'border-transparent bg-surface/40 opacity-40'
      }`}
    >
      <img
        src={quoteIcon}
        alt='quote'
        className='mb-3 h-8 w-8 object-contain'
      />

      <div className='mb-3 flex justify-center gap-1'>
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            size={16}
            className={i < data.rating ? 'text-primary' : 'text-white/20'}
            fill='currentColor'
          />
        ))}
      </div>

      <p className='text-center text-sm text-white/90'>"{data.quote}"</p>
      <p className='mt-4 text-center text-sm font-semibold text-white'>
        {data.name}
      </p>
      <p className='text-center text-sm text-primary'>{data.role}</p>
    </div>
  );
}

export default function Testimonials() {
  const [active, setActive] = useState(1);
  const total = testimonials.length;

  const prev = (active - 1 + total) % total;
  const next = (active + 1) % total;

  return (
    <section id='testimonials' className='px-5 py-16 md:px-10'>
      <div className='mx-auto max-w-5xl'>
        <div className='flex justify-center'>
          <SectionHeader
            title='What Partners Say About Working With Us'
            subtitle='Trusted voices. Real experiences. Proven results.'
          />
        </div>

        <div className='mt-12 grid items-center gap-4 md:grid-cols-3'>
          <div className='hidden md:block'>
            <Card data={testimonials[prev]} active={false} />
          </div>

          <div className='relative mx-auto w-full max-w-[594px]'>
            <Card data={testimonials[active]} active={true} />
            <img
              src={testimonials[active].avatar}
              alt={testimonials[active].name}
              className='mx-auto -mt-6 h-12 w-12 rounded-full border-2 border-bg object-cover'
            />
          </div>

          <div className='hidden md:block'>
            <Card data={testimonials[next]} active={false} />
          </div>
        </div>

        <div className='mt-8 flex justify-center gap-2'>
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              aria-label={`testimonial ${i + 1}`}
              className={`h-2 w-2 rounded-full transition-colors ${
                active === i ? 'bg-primary' : 'bg-white/30'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
