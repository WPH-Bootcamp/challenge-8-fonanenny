import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { faqs } from '../../data';
import Button from '../ui/Button';
import consultation from '../../assets/consultation.png';

/*
  Faq: accordion (klik untuk buka/tutup) + kartu konsultasi oranye.
  openIndex menyimpan index pertanyaan yang terbuka.
*/
export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id='faq' className='px-5 py-16 md:px-10'>
      <div className='mx-auto max-w-6xl'>
        <div className='flex flex-col justify-between gap-2 border-b border-border-soft pb-6 md:flex-row md:items-end'>
          <h2 className='text-3xl font-bold text-white md:text-4xl'>
            Need Help? Start <br /> Here.
          </h2>
          <p className='text-sm text-muted md:text-right'>
            Everything you need to <br className='hidden md:block' /> know — all
            in one place.
          </p>
        </div>

        <div className='mt-8 grid gap-8 md:grid-cols-[1fr_320px]'>
          {/* Accordion */}
          <div>
            {faqs.map((faq, index) => (
              <div
                key={faq.question}
                className='border-b border-border-soft py-5'
              >
                <button
                  onClick={() => toggle(index)}
                  className='flex w-full items-center justify-between text-left'
                >
                  <span className='font-medium text-white'>{faq.question}</span>
                  {openIndex === index ? (
                    <Minus size={18} className='text-white' />
                  ) : (
                    <Plus size={18} className='text-white' />
                  )}
                </button>

                {openIndex === index && (
                  <p className='mt-3 text-sm text-muted'>{faq.answer}</p>
                )}
              </div>
            ))}
          </div>

          {/* Kartu konsultasi */}
          <div className='rounded-2xl bg-primary p-6'>
            <h3 className='text-xl font-bold text-white'>
              Let's talk it through
            </h3>
            <p className='mt-2 text-sm text-white/90'>
              book a free consultation with our team.
            </p>
            <img
              src={consultation}
              alt='consultation'
              className='mt-4 h-40 w-full rounded-xl object-cover'
            />
            <Button
              href='#contact'
              className='mt-4 w-full border-none bg-white text-primary hover:bg-white/90'
            >
              Free Consultation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
