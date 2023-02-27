import React from 'react';
import CartWidget from './CartWidget';
import Search from './Search';
import { Link } from 'react-router-dom';
import TBBLogo from '../images/LogoAsset4@330.png';

const Navbar = () => {
  return (
    <header>
      <nav className='navbar navbar-expand-lg navbar-light bg-light'>
        <div className='container-fluid'>
          <Link to={'/'} className='navbar-brand mb-0 h1' href='#'>
            <img
              src={TBBLogo}
              alt='The Beauty Box Logo by Antonio Jordi Honik'
            />
          </Link>
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarSupportedContent'
            aria-controls='navbarSupportedContent'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse' id='navbarSupportedContent'>
            <ul className='navbar-nav mb-2 mb-lg-0'>
              <li className='nav-item'>
                <Link to='/' className='nav-link active' aria-current='page'>
                  Home
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  to='/category/:categoryId'
                  className='nav-link active'
                  aria-current='page'
                >
                  Pelis en español
                </Link>
              </li>
              <li className='nav-item cart-widget'>
                <CartWidget number='5' />
              </li>
              <li className='nav-item'>
                <Link
                  to={'/aboutus'}
                  className='nav-link active'
                  aria-current='page'
                  href='#'
                >
                  About us
                </Link>
              </li>
            </ul>
            <Search />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
