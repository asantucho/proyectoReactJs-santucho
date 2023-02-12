import React from 'react';
import CartIcon from '../images/cart-shopping-solid.svg';

const CartWidget = (props) => {
  return (
    <a class='nav-link active' aria-current='page' href='#'>
      <img className='cart-icon' src={CartIcon} alt='Cart icon' />
      <div className='product-amount'>
        <span className='product-amount-notification'>{props.number}</span>
      </div>
    </a>
  );
};

export default CartWidget;
