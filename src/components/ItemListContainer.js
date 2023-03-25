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
      <h1>Check our most popular products</h1>
      <div className='card-container'>
        {products.map((product) => {
          return (
            <div className='card'>
              <img src={product.imageId} alt={`${product.product}`} />
              <div className='row'>
                <div className='col-6 '>{product.product}</div>
                <div className='col-6'>${product.price}</div>
              </div>
              <button className='button-detail' id={`button-${product.id}`}>
                <Link to={`item/${product.id}`} className='detail'>
                  Go to detail
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
