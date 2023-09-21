import React from "react";
import "../SuasInformações/suasInformações.css";
import Header from "../../Componentes/Header/header";
import Footer from "../../Componentes/Footer/footer";
import Login from "../../Componentes/login/login";
import ViaCep from "../../Componentes/ViaCep/viaCep";
import Container from '@mui/material/Container';





function SuasInformações (){
    return (
        <>  
            <section className= "Container">
                <div id= "GridComplexExample"></div>
                    <div className="description">
                        <h3>Suas informações</h3>
                    </div>

                <div className="ViaCep"></div>

            </section>


        <Header/>
        <Container/>
        <Login/>
        <ViaCep/>
        <Footer/>
      
        </>
    )


}

export default SuasInformações;



       

