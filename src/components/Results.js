import React from 'react';
import { Link } from 'react-router-dom';

const Results = (props) => {
  if (props.results.length === 0) {
    return <p>No results found</p>;
  }

  return (
    <div className='result-container'>
      {props.results.map((result) => (
        <div className='result-card' key={result.id}>
          <img src={result.imageId} alt={`${result.product}`} />
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
  );
};

export default Results;
