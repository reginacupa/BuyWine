import React from "react";
import "../NossosProdutos/nossosProdutos.css";
import Header from "../../Componentes/Header/header";
import Footer from "../../Componentes/Footer/footer";
import Container from '@mui/material/Container';
import ProductList from "../../Componentes/ProductList/productList";



function NossosProdutos(){
    

    return(
        <> 
        <section className= "Container">
            <div id= "GridComplexExample"></div>
                <div className="description">
                    <h3>Nossos produtos</h3>
                </div>


            <div id= "produtos"></div>
                <div className="productList"></div>     

        </section>

        
        <Header/>
        <Container/>
        <ProductList/>
        <Footer/>


        </>
    )

}

export default NossosProdutos;

