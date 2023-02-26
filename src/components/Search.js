import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Search = () => {
  const [value, setValue] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    props.setSearch(value);
  };

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <form className='d-flex' onSubmit={handleSubmit}>
      <input
        className='form-control me-2'
        type='search'
        placeholder='Search'
        aria-label='Search'
        onChange={handleChange}
      />
      <button className='btn btn-outline-success' type='submit'>
        <Link to={'/results'}>Search</Link>
      </button>
    </form>
  );
};

export default Search;
