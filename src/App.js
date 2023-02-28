import React from 'react';
import './styles/styles.css';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer';
import AboutUs from './components/AboutUs';
import { useEffect } from 'react';
import Results from './components/Results';
import { useState } from 'react';
import Cart from './components/Cart';

function App() {
  const [search, setSearch] = useState('');
  const [results, setResults] = useState([]);

  const apiKey = '2bfe34db0d27d97661602c0ccc0e3df3';

  useEffect(() => {
    if (search != '') {
      fetch(
        `https://api.themoviedb.org/3/search/multi?query=${search}&api_key=${apiKey}&language=en-US&page=1&include_adult=false`
      )
        .then((results) => results.json())
        .then((data) => setResults(data.results));
    }
  }, [search]);

  return (
    <div className='App'>
      <BrowserRouter>
        <Navbar setSearch={setSearch} />
        <Routes>
          <Route exact path='/' element={<ItemListContainer />} />
          <Route
            exact
            path='/category/:categoryId'
            element={<ItemListContainer />}
          />
          <Route
            exact
            path='/category/:categoryId/item/:id'
            element={<ItemDetailContainer />}
          />
          <Route exact path='/item/:id' element={<ItemDetailContainer />} />
          <Route exact path='/cart' element={<Cart />} />
          <Route exact path='/aboutus' element={<AboutUs />} />
          <Route exact path='/search/:results' element={<Results />} />
          <Route
            exact
            path='/search/:results/item/:id'
            element={<ItemDetailContainer />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
