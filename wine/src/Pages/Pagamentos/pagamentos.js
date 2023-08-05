import React from "react";
import "../Pagamentos/pagamentos.css";
import Header from "../../Componentes/Header/header";
import Formulario from '../../Componentes/Formulario/formulario';
import Footer from "../../Componentes/Footer/footer";



function Pagamentos(){
    return(
        <>
        <section className= "Container">
            <div id= "GridComplexExample"></div>
                <div className="description">
                     <h3>Pagamento</h3>
                </div>

            <div id= "ControlledRadioButtonsGroup"></div>
                <div className="button">
                </div>
            
      
        </section>

        <Header/>
        <Formulario/>
        <Footer/>
        </>
    )


}

export default Pagamentos;
