import React from 'react';
import { useState } from 'react';
import Button from './Button';
import Count from './Count';

const ItemCount = () => {
  const [count, setCount] = useState(0);

  const addButton = () => {
    setCount(count + 1);
  };

  const removeButton = () => {
    setCount(count - 1);
  };
  return (
    <div className='count-container'>
      <Button text='-' manageClick={removeButton} />
      <Count amount={count} />
      <Button text='+' manageClick={addButton} />
    </div>
  );
};

export default ItemCount;
