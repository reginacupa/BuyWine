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
<<<<<<< HEAD
                </div>     
=======
                </div>

            
                <div className="producList"></div>
                    <li>NossosProdutos</li>
            
                 
>>>>>>> e2796b6e60121fe497b6c2f4e303bb4a9e25625b

        </section>

        
        <Header/>
        <Container/>
        <ProductList/>
        <Footer/>


        </>
    )

}

export default NossosProdutos;

