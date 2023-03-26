import React from 'react';
import { CartContext } from '../Context/CartContext';
import { useContext } from 'react';
import OrderForm from './OrderForm';

const Cart = () => {
  const { cart, getTotal, getTotalQuantity, clearCart, removeFromCart } =
    useContext(CartContext);

  return (
    <div className='cart-container'>
      <div className='row'>
        <div className='col-sm-12 col-md-6 col-lg-6 cart-cards'>
          <ul>
            {cart.map((item) => (
              <li className='cart-item' key={item.id}>
                <img src={item.imageId} alt={item.product} />
                <div className='row'>
                  <h5 className='card-info col-4'>{item.product}</h5>
                  <h6 className='card-info col-4'>{item.brand}</h6>
                  <span className='card-qp-info col-4'>
                    {item.quantity} | ${item.price}
                  </span>
                </div>
                <button
                  className='cart-button delete-button'
                  onClick={() => removeFromCart(item.id)}
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
          <div className='all-cart row'>
            <h7 className='cart-total col-6'>Products: {getTotalQuantity()}</h7>
            <h7 className='cart-total col-6'>Total: ${getTotal()}</h7>
          </div>
          <div className='row'>
            <button
              className='cart-button col-12'
              type='button'
              onClick={() => clearCart()}
            >
              Empty cart
            </button>
          </div>
        </div>
        <div className='col-sm-12 col-md-6 col-lg-6 form-container'>
          <OrderForm items={cart} total={getTotal()} clearCart={clearCart} />
        </div>
      </div>
    </div>
  );
};

export default Cart;
