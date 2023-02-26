import React from 'react';

const AddToCart = (manageClick) => {
  return (
    <button className='add-cart' onClick={manageClick}>
      Add to cart
    </button>
  );
};

export default AddToCart;
