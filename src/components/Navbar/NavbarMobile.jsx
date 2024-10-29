import NavItem from '../NavItem/NavItem';

const NavbarMobile = ({ onNavigate }) => {
  return (
    <ul className="flex flex-col items-center space-y-6 text-xl">
      <li><NavItem title="STARTSEITE" href="#startPage" onClick={onNavigate} /></li>
      <li><NavItem title="SERVER INFO" href="#serverAddress" onClick={onNavigate} /></li>
      <li><NavItem title="STATISTIK" href="#stats" onClick={onNavigate} /></li>
      <li><NavItem title="VOTE" href="https://minecraft-server.eu/vote/index/575F/parwarr" target="_blank" onClick={onNavigate} /></li>
    </ul>
  );
};

export default NavbarMobile;
