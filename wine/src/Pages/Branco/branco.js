import React from "react";
import "../Branco/branco.css";
import Header from "../../Componentes/Header/header";
import Footer from "../../Componentes/Footer/footer";
import Login from "../../Componentes/login/login";
import Container from '@mui/material/Container';


function Branco (){
    return (
        <>  
            <section className= "Container">
                <div id= "GridComplexExample"></div>
                    <div className="description">
                        <h3>Suas informações</h3>
                    </div>

            </section>


    


        <Header/>
        <Container/>
        <Login/>
        <Footer/>
      
        </>
    )


}

export default Branco;



       

