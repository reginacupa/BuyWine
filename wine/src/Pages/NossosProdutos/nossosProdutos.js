import React from "react";
import "../NossosProdutos/nossosProdutos.css";
import Header from "../../Componentes/Header/header";
import Footer from "../../Componentes/Footer/footer";
import Container from '@mui/material/Container';


function NossosProdutos(){
    

    return(
        <> 
        <section className= "Container">
            <div id= "GridComplexExample"></div>
                <div className="description">
                    <h3>Nossos produtos</h3>
                </div>


            <div id= "cards"></div>
                <div className="cards-product"></div> 

        </section>

        
        <Header/>
        <Container/>
        <Footer/>


        </>
    )

}

export default NossosProdutos;

