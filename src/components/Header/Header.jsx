import Navbar from '../Navbar/Navbar';

const Header = () => {
  return (
    <header className='w-full fixed top-0 left-0 z-50 bg-gray-900 bg-opacity-80'>
      <nav className='flex items-center justify-between max-w-7xl mx-auto w-full px-4 py-3'>
        {/* Logo Section */}
        <div className='flex items-center'>
          <img src='/serverIcon.png' alt='logo' className='h-12 sm:h-16' />
        </div>

        {/* Navbar */}
        <div className='flex-grow'>
          <Navbar />
        </div>
      </nav>
    </header>
  );
};

export default Header;
