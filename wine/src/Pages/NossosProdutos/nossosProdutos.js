import React from "react";
import "../NossosProdutos/nossosProdutos.css";
import Header from "../../Componentes/Header/header";
import Footer from "../../Componentes/Footer/footer";
import Button from "../../Componentes/Button/button";
import Container from '@mui/material/Container';
import ProductList from "../../Componentes/ProductList/productList";
import QuantityBuy from "../../Componentes/QuantityBuy/QuantityBuy";


 

function NossosProdutos() {


    return (
        <>
            <section className="Container">
                <div id="GridComplexExample"></div>
                <div className="description">
                    <h3>Nossos produtos</h3>

                <div className="ProducList"></div>

                <div className="QuantityBuy"></div>
                
                </div>
            </section>
           
        
        <Header/>
        <Container/>
        <ProductList/>
        <Button/>
        <QuantityBuy/>
        <Footer/>


        </>
            )

}

export default NossosProdutos;

