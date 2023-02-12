import './styles/styles.css';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <ItemListContainer
        greeting='Oops! You arrived too soon. We are still building the website. 
        Come back soon to get to know us and our products.'
      />
    </div>
  );
}

export default App;
