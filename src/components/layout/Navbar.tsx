import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Logo from '../ui/Logo';
import Button from '../ui/Button';
import { navLinks } from '../../data';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className='sticky top-0 z-50 border-b border-border-soft bg-bg/80 backdrop-blur-md'>
      <nav className='mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-10'>
        <Logo />

        <div className='hidden items-center gap-8 md:flex'>
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className='text-sm text-white/80 transition-colors hover:text-primary'
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className='hidden md:block'>
          <Button href='#contact'>Let's Talk</Button>
        </div>

        <button
          className='text-white md:hidden'
          onClick={() => setIsOpen(!isOpen)}
          aria-label='Toggle menu'
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {isOpen && (
        <div className='border-t border-border-soft bg-bg px-5 py-4 md:hidden'>
          <div className='flex flex-col gap-4'>
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className='block text-white/80 hover:text-primary'
              >
                {link.label}
              </a>
            ))}
            <Button href='#contact' className='w-full'>
              Let's Talk
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
