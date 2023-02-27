import React from 'react';
import { Link } from 'react-router-dom';

const Results = (props) => {
  return (
    <div className='result-container'>
      {props.results.map((result) => {
        <div className='result-card'>
          <img
            src={`https://image.tmdb.org/t/p/original${result.poster_path}`}
            alt={`${result.title}`}
          />
          <button
            className='result-button-detail'
            id={`result-button-${result.id}`}
          >
            <Link to={`item/${result.id}`} className='result-detail'>
              Go to detail
            </Link>
          </button>
        </div>;
      })}
    </div>
  );
};

export default Results;
