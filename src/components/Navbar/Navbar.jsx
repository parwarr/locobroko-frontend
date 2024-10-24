import NavItem from '../NavItem/NavItem.jsx';

const Navbar = () => {
  return (
    <ul className='flex justify-center space-x-4 sm:space-x-8'>
      <li>
        <NavItem title='Startseite' />
      </li>
      <li>
        <NavItem title='News' />
      </li>
      <li>
        <NavItem title='Forum' />
      </li>
      <li>
        <NavItem title='Vote' />
      </li>
    </ul>
  );
};

export default Navbar;
