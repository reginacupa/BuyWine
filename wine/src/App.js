import React from 'react';
import Home from './Pages/Home/home';
import NossosProdutos from './Pages/NossosProdutos/nossosProdutos';
import ProductList from './Componentes/ProductList/productList';
import SuasInformações from './Pages/SuasInformações/suasInformações';
import Pagamentos from './Pages/Pagamentos/pagamentos';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import '../src/App.css';

function App() {

  return (
    <div>  
      <BrowserRouter>
        <Routes>
          <Route path= '/' element={<Home/>}/>
          <Route path= '/nossosProdutos' element={<NossosProdutos/>}/>
          <Route path= '/productList' element={<ProductList/>}/>
          <Route path='/suasInformações' element={<SuasInformações/>}/>
          <Route path='/pagamentos' element={<Pagamentos/>}/>
          
        </Routes>  
      </BrowserRouter>
    </div>
  );
}

export default App;
