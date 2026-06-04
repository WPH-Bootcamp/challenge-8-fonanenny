import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import Hero from '../components/sections/Hero';
import TrustedBy from '../components/sections/TrustedBy';
import Stats from '../components/sections/Stats';
import Process from '../components/sections/Process';
import Services from '../components/sections/Services';
import Industries from '../components/sections/Industries';
import Portfolio from '../components/sections/Portfolio';
import Testimonials from '../components/sections/Testimonials';
import Faq from '../components/sections/Faq';
import Contact from '../components/sections/Contact';

/*
  Home: halaman utama yang menyusun semua section.
  Nanti section lain ditambahkan di antara <Hero /> dan <Footer />.
*/
export default function Home() {
  return (
    <div className='min-h-screen bg-bg'>
      <Navbar />
      <main>
        <Hero />
        <TrustedBy />
        <Stats />
        <Process />
        <Services />
        <Industries />
        <Portfolio />
        <Testimonials />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
