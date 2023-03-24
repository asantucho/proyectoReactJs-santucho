import React from 'react';
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';
import TBBLogo from '../images/LogoAsset4@330.png';
import { useState, useEffect } from 'react';

const Navbar = (props) => {
  const [value, setValue] = useState('');

  useEffect(() => {
    setValue(props.search);
  }, [props.search]);

  const handleSubmit = (event) => {
    event.preventDefault();
    props.setSearch(value);
  };

  const handleChange = (event) => {
    setValue(event.target.value);
  };

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
                  to='/category/skincare'
                  className='nav-link active'
                  aria-current='page'
                >
                  Skincare
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  to='/category/make-up'
                  className='nav-link active'
                  aria-current='page'
                >
                  Make Up
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
            <form className='d-flex' onSubmit={handleSubmit}>
              <input
                className='form-control me-2'
                type='search'
                placeholder='Search'
                aria-label='Search'
                onChange={(event) => props.setSearch(event.target.value)}
              />
              <button className='btn btn-outline-success' type='submit'>
                <Link to={'/results'}>Search</Link>
              </button>
            </form>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
