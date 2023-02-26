import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const ItemListContainer = () => {
  const [productList, setProductList] = useState([]);

  const apiKey = '2bfe34db0d27d97661602c0ccc0e3df3';

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=en-US&page=1`
    )
      .then((results) => results.json())
      .then((data) => {
        console.log(data);
        setProductList(data.results);
      });
  }, []);

  return (
    <main>
      <div className='item-list-container'>
        <h1>Check our most popular products</h1>
        <div className='card-container'>
          {productList &&
            productList.map((product) => {
              return (
                <div className='card'>
                  <img
                    src={`https://image.tmdb.org/t/p/original${product.poster_path}`}
                    alt={`${product.title}`}
                  />
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
