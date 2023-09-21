import React, { useEffect, useState } from 'react';
import ProductList from "../ProductList/productList.css";


const ProductLista = () => {
  const [products, setProducts] = useState([]);


  useEffect(() => {

    getList()
    
  }, []);

  const getList = async () => {
    try {
      const response = await fetch ('http://127.0.0.1:5000/produtos', { method:'GET'});
      const data = await response.json();
      setProducts(data.produtos);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const buyProduct = (produtoId) => {
    // Lógica para comprar o produto com o ID productId
    // Implemente essa lógica de acordo com suas necessidades
  };

  return (
    <div className="App">
      <div id="products-list">

      {products.map ((item, index) => (
        <div className='item'>
          <article key="id" className="product" id="id">
            <div key="index">
              <img src={item.imagem} alt="Não foi possível carregar a imagem do produto" />
              <h3 className="price-product">
                <span>R${item.preco} </span>
              </h3>

              <p className="name-product">{item.nome}</p>

              
              <p className= "product-brand">{item.categoria}</p>


              <button
                className="buy-product"
                type="button"
                onClick={() => buyProduct("id")}>Comprar
              </button>
            </div>
          </article>
        </div>

      )
      )}  
      </div>
    </div>
  );
};

export default ProductLista;

