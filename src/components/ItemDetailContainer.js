import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemCount from './ItemCount';

const ItemDetailContainer = () => {
  const [product, setProduct] = useState('');

  const { id } = useParams();

  const apiKey = '2bfe34db0d27d97661602c0ccc0e3df3';

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=en-US&page=1`
    )
      .then((results) => results.json())
      .then((data) => {
        if (id) {
          const filteredProduct = data.results.find(
            (product) => product.id === Number(id)
          );
          setProduct(filteredProduct);
        } else {
          setProduct(data.results);
        }
      });
  }, [id]);

  return (
    <div className='detail-container'>
      <img
        src={`https://image.tmdb.org/t/p/original${product.poster_path}`}
        alt={`${product.title}`}
      />
      <div className='info-details'>
        <h3 className='title'>{product.title}</h3>
        <p className='description'>{product.overview}</p>
        <ItemCount />
      </div>
    </div>
  );
};

export default ItemDetailContainer;
