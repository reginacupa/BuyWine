import React from "react";
import "../Rose/rose.css";
import Header from "../../Componentes/Header/header";
import Pagamento from '../../Componentes/Pagamento/pagamento';
import Footer from "../../Componentes/Footer/footer";



function Rose(){
    return(
        <>
        <section className= "Container">
            <div id= "GridComplexExample"></div>
                <div className="description">
                     <h3>Pagamento</h3>
                </div>

            <div id= "ControlledRadioButtonsGroup"></div>
                <div className="pagamento">
                </div>
            
      
        </section>

        <Header/>
        <Pagamento/>
        <Footer/>
        </>
    )


}

export default Rose;
