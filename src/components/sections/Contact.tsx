import { useState } from 'react';
import type { FormEvent } from 'react';
import { serviceOptions } from '../../data';

/*
  Contact: form "Ready to Start? Let's Talk".
  Controlled component: nilai input disimpan di state, di-update lewat onChange.
*/
export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [selected, setSelected] = useState<string[]>(['Web Development']);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const toggleService = (service: string) => {
    setSelected((prev) =>
      prev.includes(service)
        ? prev.filter((s) => s !== service)
        : [...prev, service]
    );
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    alert(
      `Terima kasih, ${form.name || 'Guest'}!\nEmail: ${form.email}\nServices: ${selected.join(', ')}`
    );
    setForm({ name: '', email: '', message: '' });
    setSelected([]);
  };

  return (
    <section id='contact' className='px-5 py-16 md:px-10'>
      <div className='mx-auto max-w-xl text-center'>
        <h2 className='text-3xl font-bold text-white md:text-4xl'>
          Ready to Start? Let's Talk.
        </h2>
        <p className='mt-3 text-sm text-muted'>
          Tell us what you need, and we'll get back to you soon.
        </p>

        <form onSubmit={handleSubmit} className='mt-10 space-y-5 text-left'>
          <div>
            <label className='text-sm font-medium text-white'>Name</label>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder='Enter your name'
              className='mt-2 w-full rounded-xl border border-border-soft bg-surface px-4 py-3 text-sm text-white placeholder:text-muted focus:border-primary focus:outline-none'
            />
          </div>

          <div>
            <label className='text-sm font-medium text-white'>Email</label>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder='Enter your email'
              className='mt-2 w-full rounded-xl border border-border-soft bg-surface px-4 py-3 text-sm text-white placeholder:text-muted focus:border-primary focus:outline-none'
            />
          </div>

          <div>
            <label className='text-sm font-medium text-white'>Message</label>
            <textarea
              name='message'
              value={form.message}
              onChange={handleChange}
              rows={4}
              placeholder='Enter your message'
              className='mt-2 w-full resize-none rounded-xl border border-border-soft bg-surface px-4 py-3 text-sm text-white placeholder:text-muted focus:border-primary focus:outline-none'
            />
          </div>

          <div>
            <label className='text-sm font-medium text-white'>Services</label>
            <div className='mt-3 grid grid-cols-2 gap-3'>
              {serviceOptions.map((service) => (
                <label
                  key={service}
                  className='flex cursor-pointer items-center gap-2 text-sm text-white/90'
                >
                  <input
                    type='checkbox'
                    checked={selected.includes(service)}
                    onChange={() => toggleService(service)}
                    className='h-4 w-4 accent-primary'
                  />
                  {service}
                </label>
              ))}
            </div>
          </div>

          <button
            type='submit'
            className='w-full rounded-full bg-primary py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-dark'
          >
            Send
          </button>
        </form>
      </div>
    </section>
  );
}
