import NavItem from '../NavItem/NavItem';

const Navbar = () => {
  return (
    <ul className="flex justify-center space-x-4 sm:space-x-8">
      <li><NavItem title="STARTSEITE" href="#startPage" /></li>
      <li><NavItem title="SERVER INFO" href="#serverAddress" /></li>
      <li><NavItem title="STATISTIK" href="#stats" /></li>
      <li><NavItem title="VOTE" href="https://minecraft-server.eu/vote/index/575F/parwarr" target={"_blank"} /></li>
    </ul>
  );
};

export default Navbar;
