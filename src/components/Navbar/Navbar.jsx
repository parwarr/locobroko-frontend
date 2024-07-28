import NavItem from '../NavItem/NavItem.jsx';

const Navbar = () => {
  return (
    <>
      <nav className='flex items-center justify-between max-w-7xl mx-auto p-4'>
        <ul className='flex items-center space-x-1'>
          <li>
            <a href=''>
              <NavItem
                title='Startseite'
                color='text-yellow-500'
                underline='underline'
              />
            </a>
          </li>
          <li>
            <a href=''>
              <NavItem title='News' />
            </a>
          </li>
          <li>
            <a href=''>
              <NavItem title='Forum' />
            </a>
          </li>
          <li>
            <a href=''>
              <NavItem title='Vote' />
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
