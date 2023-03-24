import React from 'react';
import CartIcon from '../images/cart-shopping-solid.svg';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../Context/CartContext';

const CartWidget = () => {
  const { getTotalQuantity } = useContext(CartContext);

  return (
    <Link to={'/cart'} className='nav-link active' aria-current='page'>
      <img className='cart-icon' src={CartIcon} alt='Cart icon' />
      <div className='product-amount'>
        <span className='product-amount-notification'>
          {getTotalQuantity()}
        </span>
      </div>
    </Link>
  );
};

export default CartWidget;
