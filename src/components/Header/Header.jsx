import Navbar from '../Navbar/Navbar';

const Header = () => {
  return (
    <header className='w-full fixed top-0 left-0 z-50 '>
      <nav className='flex items-center justify-between max-w-7xl mx-auto px-4 py-2 sm:px-6 lg:px-8'>
        <div className='flex items-center'>
          <img src='/serverIcon.png' alt='logo' className='h-16 sm:h-20' />
        </div>
        <div className='flex-grow hidden sm:block'></div>
        <div className='flex items-center justify-center'>
          <Navbar />
        </div>
        <div className='flex-grow hidden sm:block'>placeholder</div>
      </nav>
    </header>
  );
};

export default Header;
