const Navbar = () => {
  return (
    <nav className='flex justify-between py-3'>
      <div>
        <a href='/'>
          <p>IN_BOX</p>
        </a>
      </div>
      <ul className='flex items-center justify-end'>
        <li>
          <a href='/'>Home</a>
        </li>
        <li className='ml-5'>
          <a href='/privacy'>Privacy policy</a>
        </li>
        <li className='ml-5'>
          <a href='/contact'>Contact Us</a>
        </li>
        <li className='ml-5'>
          <a href='/signin'>Merchant Dashboard</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
