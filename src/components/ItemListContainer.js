import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { getDocs, collection, getFirestore } from 'firebase/firestore';

const ItemListContainer = () => {
  const [productList, setProductList] = useState([]);
  const [filteredProductList, setFilteredProductList] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    const db = getFirestore();
    const tbbRef = collection(db, 'items');

    getDocs(tbbRef).then((snapshot) => {
      if (snapshot.size === 0) {
        console.log('No results');
      } else {
        setProductList(
          snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
        );
      }
    });
  }, []);

  useEffect(() => {
    if (categoryId) {
      const filteredProducts = productList.filter(
        (product) => product.category === categoryId
      );
      setFilteredProductList(filteredProducts);
    } else {
      setFilteredProductList([]);
    }
  }, [categoryId, productList]);

  const products = categoryId ? filteredProductList : productList;

  return (
    <div className='item-list-container'>
      {categoryId ? (
        <h2>Checkout our {categoryId} products</h2>
      ) : (
        <h1>Welcome to The Beauty Box - take a look at our best sellers!</h1>
      )}
      <div className='card-container'>
        {products.map((product) => {
          return (
            <div className='card'>
              <img src={product.imageId} alt={`${product.product}`} />
              <div className='row'>
                <div className='col-6 card-product'>{product.product}</div>
                <div className='col-6 card-product'>${product.price}</div>
              </div>
              <button className='button-detail' id={`button-${product.id}`}>
                <Link to={`item/${product.id}`} className='detail'>
                  Learn more
                </Link>
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ItemListContainer;
