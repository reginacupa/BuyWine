import React from 'react';
import Home from './Pages/Home/home';
import Tinto from './Pages/Tinto/tinto';
import Branco from './Pages/Branco/branco';
import Rose from './Pages/Rose/rose';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import '../src/App.css';
import Product from './Pages/Product';
//import ProductDetails from '../src/Pages/ProductDetails';
import QuantityBuy from './Componentes/QuantityBuy';

function App() {

  return (
    <div>  
      <BrowserRouter>
        <Routes>
          <Route path= '/' element={<Home/>}/>
          <Route path= '/tinto' element={<Tinto/>}/>
          <Route path='/product' element={< Product />}></Route>
          <Route path= '/products/:id' element= {<QuantityBuy />}></Route>
          <Route path='/branco' element={<Branco/>}/>
          <Route path='/rose' element={<Rose/>}/>
          
        </Routes>  
      </BrowserRouter>
    </div>
  );
}

export default App;
