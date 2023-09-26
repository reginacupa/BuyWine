import React from "react";
import "../Home/home.css";
import "../../Componentes/Header/header";
import Header from "../../Componentes/Header/header";
import Container from '@mui/material/Container';
import Footer from "../../Componentes/Footer/footer";
import Carrossel from "../../Componentes/Carrossel/carrossel";

function Home (){
    return (
        <>    
            <div id= "Carousel"></div>

            <section className= "Container">
                <div id= "GridComplexExample"></div>
                    <div className="description">
                        <h3>Tim Tim Import</h3>

                <div className="User"></div>

                    </div>
            </section>

        <Header/>
        <Container/>
        <Carrossel/>
        <Footer/>
      
        </>
    )


}

export default Home;
