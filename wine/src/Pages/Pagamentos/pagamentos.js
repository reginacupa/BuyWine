import React from "react";
import "../Pagamentos/pagamentos.css";
import Header from "../../Componentes/Header/header";
import LoginHeader from '../../Componentes/LoginHeader/loginheader';
import Footer from "../../Componentes/Footer/footer";
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
function Pagamentos(){
    return(
        <>
        <section className= "Container">
            <div id= "GridComplexExample"></div>
                <div className="description">
                     
                </div>

            <div className= "UserLogin"></div>
                <div className="Informações para pagamento"></div>
                    <h3>Login</h3>

            <div id= "ControlledRadioButtonsGroup"></div>
                <div className="button">
                </div>


                <AccountCircleOutlinedIcon label="User" icon={<AccountCircleOutlinedIcon />} />
                <div className="AccountCircleOutlinedIcon">
                         <span>Entrar</span>
                </div>       
      
        </section>

        <Header/>
        <LoginHeader/>
        <Footer/>
        </>
    )
}

export default Pagamentos;
