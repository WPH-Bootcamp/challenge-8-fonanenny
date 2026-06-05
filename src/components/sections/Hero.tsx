import Button from '../ui/Button';
import heroImg from '../../assets/hero.png';

/*
  Hero: section pembuka. Kiri = teks + CTA, kanan = gambar ilustrasi dari Figma.
*/
export default function Hero() {
  return (
    <section id='about' className='px-5 pt-16 pb-12 md:px-10 md:pt-24'>
      <div className='mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2'>
        {/* Kolom kiri: teks */}
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

        {/* Kolom kanan: gambar */}
        <div className='flex justify-center'>
          <img
            src={heroImg}
            alt='Tech illustration'
            className='w-full max-w-md'
          />
        </div>
      </div>
    </section>
  );
}
