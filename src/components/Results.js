import React from 'react';
import { Link } from 'react-router-dom';

const Results = ({ results, searchValue }) => {
  if (results.length === 0) {
    return <h3>No results found for "{searchValue}"</h3>;
  }

  return (
    <div className='results-container'>
      <h3>Showing results for "{searchValue}"</h3>
      <div className='card-container'>
        {results.map((result) => (
          <div className='card' key={result.id}>
            <img src={result.imageId} alt={`${result.product}`} />
            <div className='row'>
              <div className='col-6 result-card'>{result.product}</div>
              <div className='col-6 result-card'>${result.price}</div>
            </div>
            <button className='button-detail' id={`button-${result.id}`}>
              <Link to={`/search/${result.id}`} className='detail'>
                Learn more
              </Link>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Results;
