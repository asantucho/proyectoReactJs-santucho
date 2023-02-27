import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const ItemListFiltered = () => {
  const [productList, setProducts] = useState([]);

  const apiKey = '2bfe34db0d27d97661602c0ccc0e3df3';

  const { original_language } = useParams();

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=en-US&page=1`
    )
      .then((results) => results.json())
      .then((data) => {
        if (original_language) {
          const filteredProduct = data.results.filter(
            (product) => product.original_language === 'es'
          );
          console.log(filteredProduct);
          setProducts(filteredProduct);
        } else {
          setProducts(data.results);
        }
      });
  }, [original_language]);

  return (
    <div className='filtered-item-list-container'>
      <h1>Peliculas en español</h1>
      <div className='filtered-card-container'>
        {productList &&
          productList.map((product) => {
            return (
              <div className='filtered-card'>
                <img
                  src={`https://image.tmdb.org/t/p/original${product.poster_path}`}
                  alt={`${product.title}`}
                />
                <button
                  className='filtered-button-detail'
                  id={`filtered-button-${product.id}`}
                >
                  <Link to={`item/${product.id}`} className='filtered-detail'>
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

export default ItemListFiltered;
