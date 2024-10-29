const NavItem = ({ title, href, color, target, onClick }) => {
  return (
    <a
      href={href}
      {...(target ? { target } : {})}
      onClick={onClick} 
      className={`hover:text-yellow-500 text-base px-5 uppercase ${color || 'text-white'}`}
    >
      {title}
    </a>
  );
};

export default NavItem;
