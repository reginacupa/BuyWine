import React from "react";
import "../Tinto/tinto.css";
import Header from "../../Componentes/Header/header";
//import Item from "../../Componentes/Item/item";
//import { UserContext } from "../../Componentes/Context/userContext";
//import Product from "../Product";
//import ProductDetails from "../ProductDetails";
//import QuantityBuy from "../../Componentes/QuantityBuy";
//import Produtos from "../../Produtos.json";
import Cards from "../../Componentes/Cards/cards";
import Footer from "../../Componentes/Footer/footer";
//import { useNavigate } from "react-router-dom";
import Container from '@mui/material/Container';

function Tinto(){
    

    return(
        <> 
        <section className= "Container">
            <div id= "GridComplexExample"></div>
                <div className="description">
                    <h3>Nossos produtos</h3>
                </div>


            <div id= "Cards"></div>
                <div className="cards-product"></div>   
          
        </section>                

        <Header/>
        <Cards/>
        <Footer/>
        </>
    )

}

export default Tinto;

