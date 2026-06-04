import Logo from '../ui/Logo';
import { navLinks } from '../../data';
import facebook from '../../assets/facebook.png';
import instagram from '../../assets/instagram.png';
import linkedin from '../../assets/linkedin.png';
import tiktok from '../../assets/tiktok.png';

const socials = [facebook, instagram, linkedin, tiktok];

/*
  Footer: bagian paling bawah. Berisi ajakan, logo, menu, dan icon sosmed.
*/
export default function Footer() {
  return (
    <footer className='px-5 pb-10 md:px-10'>
      <div className='mx-auto max-w-7xl rounded-3xl border border-border-soft bg-surface p-8 md:p-12'>
        {/* Baris atas: judul kiri, logo kanan */}
        <div className='flex flex-col gap-6 md:flex-row md:items-center md:justify-between'>
          <h2 className='text-2xl font-bold uppercase leading-tight text-white md:text-3xl'>
            Let's Discuss <br /> Your Ideas
          </h2>
          <Logo />
        </div>

        <hr className='my-8 border-border-soft' />

        {/* Baris bawah: menu kiri, sosmed kanan */}
        <div className='flex flex-col gap-6 md:flex-row md:items-center md:justify-between'>
          <ul className='flex flex-wrap gap-6'>
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className='text-sm text-white/70 transition-colors hover:text-primary'
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className='flex gap-3'>
            {socials.map((icon, i) => (
              <a
                key={i}
                href='#'
                className='flex h-9 w-9 items-center justify-center rounded-full bg-surface-2 transition-transform hover:-translate-y-0.5'
                aria-label='social media'
              >
                <img
                  src={icon}
                  alt='social'
                  className='h-4 w-4 object-contain'
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
