import { brands } from '../../data';

/*
  TrustedBy: deretan logo brand yang "mempercayai" perusahaan.
*/
export default function TrustedBy() {
  return (
    <section className='px-5 py-12 md:px-10'>
      <div className='mx-auto max-w-7xl text-center'>
        <p className='font-semibold text-white'>
          Trusted by Global Innovators &amp; Leading Brands
        </p>

        <div className='mt-8 flex flex-wrap items-center justify-center gap-8 md:gap-12'>
          {brands.map((brand) => (
            <span
              key={brand}
              className='text-lg font-semibold text-white/40 transition-colors hover:text-white/70 md:text-xl'
            >
              {brand}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
