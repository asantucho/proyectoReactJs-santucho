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
import Footer from './components/Footer';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import CartProvider from './Context/CartContext';
import Main from './components/Main';
import Brands from './components/Brands';

function App() {
  const [search, setSearch] = useState('');
  const [results, setResults] = useState([]);

  useEffect(() => {
    console.log('Search input changed:', search);
    if (search != '') {
      const db = getFirestore();
      const tbbRef = collection(db, 'items');
      getDocs(tbbRef).then((snapshot) => {
        const searchResults = snapshot.docs
          .map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }))
          .filter((item) =>
            Object.values(item).some(
              (value) =>
                typeof value === 'string' &&
                value.toLowerCase().includes(search.toLowerCase())
            )
          );
        setResults(searchResults);
      });
    } else {
      setResults([]);
    }
  }, [search]);

  return (
    <div className='App'>
      <CartProvider>
        <BrowserRouter>
          <Navbar setSearch={setSearch} search={search} />
          <Main>
            <Brands />
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
              <Route
                exact
                path='/:results'
                element={<Results results={results} />}
              />
              <Route
                exact
                path='/search/:id'
                element={<ItemDetailContainer />}
              />
            </Routes>
          </Main>
          <Footer />
        </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;
