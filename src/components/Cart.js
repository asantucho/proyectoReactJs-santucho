import React from 'react';
import { CartContext } from '../Context/CartContext';
import { useContext } from 'react';

const Cart = () => {
  const { cart, getTotal, getTotalQuantity, clearCart, removeFromCart } =
    useContext(CartContext);

  return (
    <div>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            <img src={item.imageId} alt={item.product} />
            <h5>{item.product}</h5>
            <h6>{item.brand}</h6>
            <span>
              {item.quantity} | ${item.price * item.quantity}
            </span>
            <button onClick={() => removeFromCart(item.id)}>Delete</button>
          </li>
        ))}
        <p>Products: {getTotalQuantity()}</p>
        <p>Total: ${getTotal()}</p>
        <button type='button' onClick={() => clearCart()}>
          Empty cart
        </button>
        <button type='button'>Checkout</button>
      </ul>
    </div>
  );
};

export default Cart;
