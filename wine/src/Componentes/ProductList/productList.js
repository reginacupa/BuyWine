import React, { useEffect, useState } from 'react';
import './productList.css';


const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getList();
  }, []);

  const getList = async () => {
    try {
      const response = await fetch ('https://fakestoreapi.com/products');
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const buyProduct = (productId) => {
    // Lógica para comprar o produto com o ID productId
    // Implemente essa lógica de acordo com suas necessidades
  };

  return (
    <div className="App">
      <div id="products-list">
        {products.map((product) => (
          <article key={product.id} className="product" id={product.id}>
            <img src={product.image} alt="Não foi possível carregar a imagem do produto" />

            <h3 className="price-product">
              <span>R$ {product.price}</span>
            </h3>

            <p className="name-product">{product.title}</p>

            <button
              className="buy-product"
              type="button"
              onClick={() => buyProduct(product.id)}
            >
              Comprar
            </button>
          </article>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
