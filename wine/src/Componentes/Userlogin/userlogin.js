import React, { useState } from 'react';




const ClientLista = () => {
  const [clients, setClients] = useState([]);


  const getList = async () => {
    try {
      const response = await fetch('http://127.0.0.1:5001/post_cliente', { method: 'POST' });
      const data = await response.json();

      setClients(data.clientes);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const loginClient = (clientname) => {
    
  };

    return (

    <div className="App">
      <div id="clients-list">

        {clients.map((nome, index) => (
          <div className='nome'>
            <article key="nome" className="clients">
              <div key="index">
                <h3 className="nome-client">
                  <span>Sr./Sra.{nome.nome} </span>
                </h3>

                <p className="sobrenome-client">{nome.sobrenome}</p>


                <p className="e_mail-client">{nome.e_mail}</p>

                <p className= "senha-client">{nome.senha}</p>

    
              <button
                className="client-login"
                type="button"
                onClick={() => loginClient(" ")}>Entrar


              </button>
            </div>
          </article>
        </div>

      )
      )}
    </div>
  </div>
      )}

        

      

export default ClientLista;

