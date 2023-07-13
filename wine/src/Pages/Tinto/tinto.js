import React from "react";
import "../Tinto/tinto.css";
import Header from "../../Componentes/Header/header";
import Cards from "../../Componentes/Cards/cards";
import Footer from "../../Componentes/Footer/footer";
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
        <Container/>
        <Footer/>


        </>
    )

}

export default Tinto;

