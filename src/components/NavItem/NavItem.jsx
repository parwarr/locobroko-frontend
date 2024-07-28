const NavItem = (props) => {
  return (
    <div
      className={`hover:text-yellow-500 text-base px-5 uppercase ${
        props.color || 'text-white'
      } ${props.underline || ''}`}
    >
      <p>{props.title}</p>
    </div>
  );
};

export default NavItem;
