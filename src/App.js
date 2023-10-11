import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import AboutUs from './Pages/AboutUs';
import Product from './Pages/Product';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path='/Aboutus' element={<AboutUs/>}/>
        <Route path='/Product' element={<Product/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
