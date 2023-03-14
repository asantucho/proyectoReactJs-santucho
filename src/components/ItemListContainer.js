import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import {
  doc,
  getDoc,
  getDocs,
  collection,
  getFirestore,
} from 'firebase/firestore';

const ItemListContainer = () => {
  const [productList, setProductList] = useState([]);
  const [filteredProductList, setFilteredProductList] = useState([]);
  const [shouldFilter, setShouldFilter] = useState(false);

  const { categoryId } = useParams();

  useEffect(() => {
    const db = getFirestore();
    const tbbRef = collection(db, 'items');

    getDocs(tbbRef).then((snapshot) => {
      if (snapshot === 0) {
        console.log('no results');
      } else {
        setProductList(
          snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
        );
        if (categoryId) {
          const filteredProducts = productList.filter(
            (product) => product.category === categoryId
          );
          setFilteredProductList(filteredProducts);
          setShouldFilter(true);
        } else {
          setShouldFilter(false);
        }
      }
    });
  }, [productList, categoryId]);

  const products = shouldFilter ? filteredProductList : productList;

  return (
    <main>
      <div className='item-list-container'>
        <h1>Check our most popular products</h1>
        <div className='card-container'>
          {products.map((product) => {
            return (
              <div className='card'>
                <img src={product.imageId} alt={`${product.product}`} />
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
    </main>
  );
};

export default ItemListContainer;
