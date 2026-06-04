import logo from '../../assets/logo.png';

/*
  Logo: dipakai di Navbar dan Footer.
  Memakai gambar logo asli dari Figma + teks "Your Logo".
*/
export default function Logo() {
  return (
    <div className='flex items-center gap-2'>
      <img src={logo} alt='Your Logo' className='h-6 w-auto' />
      <span className='text-lg font-semibold text-white'>Your Logo</span>
    </div>
  );
}
