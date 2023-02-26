import React from 'react';
import CartIcon from '../images/cart-shopping-solid.svg';
import { Link } from 'react-router-dom';

const CartWidget = (props) => {
  return (
    <Link to={'/cart'} className='nav-link active' aria-current='page'>
      <img className='cart-icon' src={CartIcon} alt='Cart icon' />
      <div className='product-amount'>
        <span className='product-amount-notification'>{props.number}</span>
      </div>
    </Link>
  );
};

export default CartWidget;
