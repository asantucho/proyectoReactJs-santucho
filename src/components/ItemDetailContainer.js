import React from 'react';
import { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { getDocs, collection, getFirestore } from 'firebase/firestore';
import { CartContext } from '../Context/CartContext';
import Button from './Button';
import Count from './Count';

const ItemDetailContainer = (props) => {
  const [productDetail, setProductDetail] = useState([]);
  const [count, setCount] = useState(0);
  const [stock, setStock] = useState(0);
  const { cart, addToCart } = useContext(CartContext);

  const { id } = useParams();

  useEffect(() => {
    const db = getFirestore();
    const tbbRef = collection(db, 'items');

    getDocs(tbbRef).then(
      (snapshot) => {
        if (snapshot.size === 0) {
          console.log('no results');
        } else {
          const products = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
          setProductDetail(products);

          if (id) {
            const filteredProduct = products.find(
              (product) => product.id === id
            );
            if (filteredProduct) {
              setProductDetail(filteredProduct);
              setStock(filteredProduct.stock);
            } else {
              setProductDetail(null);
            }
          }
        }
      },
      [id]
    );
  });

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

  const handleAddToCart = (product) => {
    if (count > 0) {
      addToCart(product, count);
      setCount(0);
    } else {
      alert('You need to choose the amount first!');
    }
  };

  return productDetail ? (
    <div className='detail-container'>
      <img src={productDetail.imageId} alt={`${productDetail.product}`} />
      <div className='info-details'>
        <h3 className='title'>{productDetail.product}</h3>
        <h4 className='subtitle'>{productDetail.brand}</h4>
        <p className='description'>{productDetail.description}</p>
        <p className='price'>{`$${productDetail.price}`}</p>
        <div className='count-container'>
          <div className='amount-container'>
            <Button text='-' manageClick={removeButton} />
            <Count amount={count} />
            <Button text='+' manageClick={addButton} />
          </div>
          <button
            className='add-cart'
            onClick={() => handleAddToCart(productDetail, count)}
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  ) : (
    <div className='no-results'>
      <h3>The product you are looking for does not exist</h3>
    </div>
  );
};

export default ItemDetailContainer;
