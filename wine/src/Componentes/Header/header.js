import React from 'react';
import { Link } from 'react-router-dom';
import '../Header/header.css';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';


function Header (){
    return (
        <>
            <header>
                <nav>
                    <ul>
                        <Link  to= '/'>
                            <div className="home"></div>
                                <li>Home</li>
                        </Link>

                        <Link to= '/nossosProdutos'>
                            <div className='nossosProdutos'></div>
                            <li>Nossos produtos</li>
                        </Link>

                        <Link to= '/suasInformações'>
                            <div className='suasInformações'></div>
                            <li>Suas informações</li>
                        </Link>

                        <Link to= '/pagamentos'>
                            <div className='pagamentos'></div>
                            <li>Pagamento</li>
                        </Link>

                        
                    </ul>
                </nav>

                <AddShoppingCartOutlinedIcon label="Carrinho" icon={<AddShoppingCartOutlinedIcon />} />
                <div className="AddShoppingCartOutlinedIcon">
                    <span>Carrinho</span>
                </div>


                <LocalShippingOutlinedIcon label="Favoritos" icon={<LocalShippingOutlinedIcon />} />
                <div className="LocalShippingOutlinedIcon">
                    <span>Rastreie seu pedido</span>
                </div>


                <FavoriteBorderOutlinedIcon label="Favoritos" icon={<FavoriteBorderOutlinedIcon />} />
                <div className="FavoriteBorderOutlinedIcon">
                    <span>Favoritos</span>
                </div>


                <AccountCircleOutlinedIcon label="User" icon={<AccountCircleOutlinedIcon />} />
                <div className="AccountCircleOutlinedIcon">
                    <span>Entrar</span>
                </div>

            </header>
        </>
    )
}

export default Header;