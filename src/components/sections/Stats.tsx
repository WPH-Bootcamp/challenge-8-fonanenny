import SectionHeader from '../ui/SectionHeader';
import { stats } from '../../data';

/*
  Stats: judul + 4 lingkaran angka statistik.
  grid-cols-2 di mobile (2 per baris) -> md:grid-cols-4 (4 sejajar) di desktop.
*/
export default function Stats() {
  return (
    <section className='px-5 py-16 md:px-10'>
      <div className='mx-auto flex max-w-7xl flex-col items-center'>
        <SectionHeader
          title='End-to-End IT Solutions That Drive Results'
          subtitle='From strategy to execution, we deliver solutions that grow your business.'
        />

        <div className='mt-12 grid w-full grid-cols-2 gap-6 md:grid-cols-4'>
          {stats.map((stat) => (
            <div
              key={stat.label}
              className='mx-auto flex aspect-square w-full max-w-[200px] flex-col items-center justify-center rounded-full bg-surface text-center'
            >
              <span className='text-3xl font-bold text-primary md:text-4xl'>
                {stat.value}
              </span>
              <span className='mt-1 px-4 text-xs text-white/80 md:text-sm'>
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
