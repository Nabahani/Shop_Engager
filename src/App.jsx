import './App.css';
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage';
import Checkout from './pages/Checkout';
import ProductProvider from './context/ProductContext';

function App() {
  return (
    <>
      <ProductProvider>

        <Routes>
          <Route path='/' element={<HomePage />}></Route>
          <Route path='/checkout/:id' element={<Checkout />}></Route>
        </Routes>

      </ProductProvider>
    </>
  )
}

export default App;