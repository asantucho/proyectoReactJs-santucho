import React from 'react';
import { Link } from 'react-router-dom';

const Results = (props) => {
  if (props.results.length === 0) {
    return <h3>No results found</h3>;
  }

  return (
    <div className='results-container'>
      <div className='result-card-container'>
        {props.results.map((result) => (
          <div className='result-card' key={result.id}>
            <img src={result.imageId} alt={`${result.product}`} />
            <div className='row'>
              <div className='col-6'>{result.product}</div>
              <div className='col-6'>${result.price}</div>
            </div>
            <button
              className='result-button-detail'
              id={`result-button-${result.id}`}
            >
              <Link to={`/search/${result.id}`} className='result-detail'>
                Go to detail
              </Link>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Results;
