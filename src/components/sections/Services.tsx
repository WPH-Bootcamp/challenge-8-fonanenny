import SectionHeader from '../ui/SectionHeader';
import { services } from '../../data';

/*
  Services: judul + 9 kartu layanan dalam grid.
  grid: 1 kolom (mobile) -> 2 (sm) -> 3 (lg).
  Icon pakai gambar dari Figma (service.icon).
*/
export default function Services() {
  return (
    <section id='service' className='px-5 py-16 md:px-10'>
      <div className='mx-auto max-w-6xl'>
        <div className='flex justify-center'>
          <SectionHeader
            title='Smart IT Solutions That Grow With You'
            subtitle='Tailored tech to boost efficiency, security, and results.'
          />
        </div>

        <div className='mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3'>
          {services.map((service) => (
            <div
              key={service.title}
              className='rounded-2xl border border-border-soft bg-surface p-6 transition-colors hover:border-primary/50'
            >
              <img
                src={service.icon}
                alt={service.title}
                className='h-12 w-12 object-contain'
              />
              <h3 className='mt-4 font-semibold text-white'>{service.title}</h3>
              <p className='mt-2 text-sm text-muted'>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
