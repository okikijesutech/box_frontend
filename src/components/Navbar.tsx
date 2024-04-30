import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className='flex justify-between py-3'>
      <div>
        <Link to='/'>
          <p>IN_BOX</p>
        </Link>
      </div>
      <ul className='flex items-center justify-end'>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li className='ml-5'>
          <Link to='/privacy'>Privacy policy</Link>
        </li>
        <li className='ml-5'>
          <Link to='/contact'>Contact Us</Link>
        </li>
        <li className='ml-5'>
          <Link to='/merchant_dashboard'>Merchant Dashboard</Link>
        </li>
        <li className='ml-5'>
          <Link to='/user_signin'>Log In</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
