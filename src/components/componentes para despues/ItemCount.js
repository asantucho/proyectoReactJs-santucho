import React from 'react';
import { useState } from 'react';
import Button from './Button';
import Count from './Count';
import AddToCart from './AddToCart';

const ItemCount = () => {
  const [count, setCount] = useState(0);

  const stock = 5;

  const addButton = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const removeButton = () => {
    if (count >= 1) {
      setCount(count - 1);
    }
  };

  const [cart, setCart] = useState([]);

  const addToCart = () => {
    if (count >= 1) {
      setCart(cart.push(count));
    }
  };

  return (
    <div className='count-container'>
      <div className='amount-container'>
        <Button text='-' manageClick={removeButton} />
        <Count amount={count} />
        <Button text='+' manageClick={addButton} />
      </div>
      <AddToCart manageClick={addToCart} />
    </div>
  );
};

export default ItemCount;
