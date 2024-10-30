import { useState } from 'react';
import Navbar from '../Navbar/Navbar';
import NavbarMobile from '../Navbar/NavbarMobile';
import { FaBars, FaTimes, FaCartPlus } from 'react-icons/fa';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="w-full fixed top-0 left-0 z-50 bg-gradient-to-br from-gray-900 to-gray-800 bg-opacity-50">
      <nav className="flex items-center justify-between max-w-7xl mx-auto w-full px-4 py-3">
        <div className="flex items-center">
        <a
        href="#startPage"
       >
          <img src="/images/serverIcon.png" alt="logo" className="h-10 sm:h-12 md:h-14" />
       </a>
        </div>

        <div className="hidden md:flex flex-grow justify-center">
          <Navbar />
        </div>

        <div className="hidden md:flex justify-center md:justify-end space-x-4 sm:space-x-6 lg:space-x-8">
          <a
            href="https://www.youtube.com/channel/UCXTBHWIiYGXib9RZ5AwdHwA"
            className="flex items-center justify-center bg-red-700 bg-opacity-80 text-white text-sm sm:text-base md:text-lg lg:text-xl py-1 sm:py-2 px-3 sm:px-4 md:px-6 rounded-lg shadow-lg hover:scale-105 hover:bg-red-600 transition-transform border-slate-50 border-2 md:border-4"
          >
              <FaCartPlus className="mr-2" /> SHOP
          </a>
        </div>

        <button
          className="md:hidden flex items-center text-white text-2xl"
          onClick={toggleMobileMenu}
        >
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </nav>

      {isMobileMenuOpen && (
        <div className="fixed inset-0  bg-gradient-to-br from-gray-900 to-gray-800 bg-opacity-70 text-white flex flex-col items-center space-y-8 pt-40 z-40  no-doc-scroll">
          <button
            className="absolute top-5 right-5 text-3xl text-white"
            onClick={toggleMobileMenu}
          >
            <FaTimes />
          </button>

          <div className="flex items-center">
          <a
             href="#startPage"
           >
              <img src="/images/serverIcon.png" alt="logo" className="h-14" />
           </a>
          </div>

          <NavbarMobile onNavigate={() => setIsMobileMenuOpen(false)} />
          
          <div className="flex justify-center">
            <a
              href="https://www.youtube.com/channel/UCXTBHWIiYGXib9RZ5AwdHwA"
              className="flex items-center justify-center bg-red-700 bg-opacity-80 text-white text-lg py-2 px-6 rounded-lg shadow-lg hover:scale-105 hover:bg-red-600 transition-transform border-slate-50 border-4"
            >
                <FaCartPlus className="mr-2" /> SHOP
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
