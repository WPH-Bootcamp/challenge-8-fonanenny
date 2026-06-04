import Button from '../ui/Button';

/*
  Hero: section pembuka paling atas.
  - Kiri: judul besar, deskripsi, tombol CTA.
  - Kanan: ilustrasi "phone" dari div + emoji (gear, cloud, code).
  grid md:grid-cols-2 -> 1 kolom di mobile, 2 kolom di desktop.
*/
export default function Hero() {
  return (
    <section id='about' className='px-5 pt-16 pb-12 md:px-10 md:pt-24'>
      <div className='mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2'>
        {/* ===== Kolom kiri: teks ===== */}
        <div className='animate-fade-up'>
          <h1 className='text-4xl font-bold leading-tight md:text-5xl'>
            Your Tech Partner for <br />
            <span className='text-primary'>Smarter Growth</span>
          </h1>
          <p className='mt-5 max-w-md text-sm text-muted md:text-base'>
            We deliver tailored IT solutions to help you scale with speed and
            confidence.
          </p>
          <div className='mt-8'>
            <Button href='#contact'>Let's Talk</Button>
          </div>
        </div>

        {/* ===== Kolom kanan: ilustrasi phone ===== */}
        <div className='relative flex justify-center'>
          {/* glow oranye di belakang */}
          <div className='absolute h-72 w-72 rounded-full bg-primary/30 blur-3xl' />

          {/* badan phone */}
          <div className='relative h-96 w-52 rotate-6 rounded-[2.5rem] border border-white/10 bg-gradient-to-b from-surface-2 to-bg p-3 shadow-2xl'>
            <div className='flex h-full flex-col gap-3 rounded-[2rem] bg-bg/60 p-4'>
              <div className='h-3 w-1/2 rounded-full bg-primary/80' />
              <div className='h-3 w-3/4 rounded-full bg-primary-light/60' />
              <div className='mt-2 h-20 rounded-2xl bg-gradient-to-br from-primary to-primary-dark' />
              <div className='h-3 w-2/3 rounded-full bg-primary/60' />
              <div className='h-3 w-1/2 rounded-full bg-primary-light/50' />
              <div className='mt-auto h-16 rounded-2xl bg-gradient-to-br from-primary-light to-primary' />
            </div>
          </div>

          {/* emoji mengambang */}
          <span className='absolute -left-2 top-10 text-4xl drop-shadow-lg'>
            ⚙️
          </span>
          <span className='absolute right-2 top-0 text-3xl drop-shadow-lg'>
            ☁️
          </span>
          <span className='absolute -right-2 bottom-16 text-3xl drop-shadow-lg'>
            {'</>'}
          </span>
        </div>
      </div>
    </section>
  );
}
