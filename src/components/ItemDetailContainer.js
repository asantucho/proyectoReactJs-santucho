import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemCount from './ItemCount';
import { getDocs, collection, getFirestore } from 'firebase/firestore';

const ItemDetailContainer = () => {
  const [productDetail, setProductDetail] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    const db = getFirestore();
    const tbbRef = collection(db, 'items');

    getDocs(tbbRef).then((snapshot) => {
      if (snapshot.size === 0) {
        console.log('no results');
      } else {
        const products = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setProductDetail(products);

        if (id) {
          const filteredProduct = products.find((product) => product.id === id);
          if (filteredProduct) {
            setProductDetail(filteredProduct);
          }
        }
      }
    });
  }, [id]);

  return (
    <div className='detail-container'>
      <img src={productDetail.imageId} alt={`${productDetail.product}`} />
      <div className='info-details'>
        <h3 className='title'>{productDetail.product}</h3>
        <p className='description'>{productDetail.description}</p>
        <ItemCount />
      </div>
    </div>
  );
};

export default ItemDetailContainer;
