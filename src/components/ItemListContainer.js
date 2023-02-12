import React from 'react';

const ItemListContainer = (props) => {
  return (
    <main>
      <div className='item-list-container'>{props.greeting}</div>
    </main>
  );
};

export default ItemListContainer;
