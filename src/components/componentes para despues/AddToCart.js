import React from 'react';

const AddToCart = (manageClick) => {
  return (
    <div className='.add-cart-button-container'>
      <button className='add-cart' onClick={manageClick}>
        Add to cart
      </button>
    </div>
  );
};

export default AddToCart;
