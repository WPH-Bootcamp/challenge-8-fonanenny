import SectionHeader from '../ui/SectionHeader';
import { portfolios } from '../../data';

/*
  Portfolio: "From Vision to Launch! Projects We're Proud Of".
  3 kartu: gambar + kategori (oranye) + judul.
*/
export default function Portfolio() {
  return (
    <section id='projects' className='px-5 py-16 md:px-10'>
      <div className='mx-auto max-w-6xl'>
        <div className='flex justify-center'>
          <SectionHeader
            title="From Vision to Launch! Projects We're Proud Of"
            subtitle='Take a closer look at our recent work powering startups, enterprises, and everything in between.'
          />
        </div>

        <div className='mt-12 grid grid-cols-1 gap-6 md:grid-cols-3'>
          {portfolios.map((item) => (
            <div key={item.title} className='group'>
              <div className='overflow-hidden rounded-2xl border border-border-soft'>
                <img
                  src={item.image}
                  alt={item.title}
                  className='h-56 w-full object-cover transition-transform duration-300 group-hover:scale-105'
                />
              </div>
              <p className='mt-4 text-sm font-medium text-primary'>
                {item.category}
              </p>
              <h3 className='mt-1 text-lg font-semibold text-white'>
                {item.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
