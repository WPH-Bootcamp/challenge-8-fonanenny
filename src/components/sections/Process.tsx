import { ChevronUp } from 'lucide-react';
import SectionHeader from '../ui/SectionHeader';
import { processSteps } from '../../data';

/*
  Process: timeline "Our Process" dengan 6 langkah.
  - Desktop: kartu zig-zag kiri-kanan, garis & nomor di tengah.
  - Mobile: semua kartu menumpuk ke bawah dengan nomor di kiri.
  Trik zig-zag: cek index genap/ganjil (index % 2).
*/

// Kartu kecil untuk satu langkah
function StepCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className='flex items-start justify-between gap-2 rounded-xl border border-border-soft bg-surface px-5 py-4'>
      <div>
        <h3 className='text-sm font-semibold text-white'>{title}</h3>
        <p className='mt-1 text-xs text-muted'>{description}</p>
      </div>
      <ChevronUp size={16} className='mt-1 shrink-0 text-white/50' />
    </div>
  );
}

export default function Process() {
  return (
    <section className='px-5 py-16 md:px-10'>
      <div className='mx-auto max-w-5xl'>
        <div className='flex justify-center'>
          <SectionHeader
            title='Our Process'
            subtitle='Clear steps. Smart execution. Results you can count on.'
          />
        </div>

        <div className='relative mt-14'>
          {/* Garis vertikal tengah (hanya desktop) */}
          <div className='absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-border-soft md:block' />

          <div className='flex flex-col gap-8'>
            {processSteps.map((step, index) => {
              const isLeft = index % 2 === 0;

              return (
                <div
                  key={step.id}
                  className='relative grid grid-cols-[auto_1fr] items-center gap-4 md:grid-cols-[1fr_auto_1fr]'
                >
                  {/* Kolom kiri (desktop) */}
                  <div className='hidden md:block'>
                    {isLeft && (
                      <StepCard
                        title={step.title}
                        description={step.description}
                      />
                    )}
                  </div>

                  {/* Nomor lingkaran */}
                  <div className='z-10 flex h-9 w-9 items-center justify-center rounded-full bg-primary text-sm font-bold text-white'>
                    {step.id}
                  </div>

                  {/* Kolom kanan (desktop) */}
                  <div className='hidden md:block'>
                    {!isLeft && (
                      <StepCard
                        title={step.title}
                        description={step.description}
                      />
                    )}
                  </div>

                  {/* Mobile: kartu selalu di kanan nomor */}
                  <div className='md:hidden'>
                    <StepCard
                      title={step.title}
                      description={step.description}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
