import React, { useEffect, useState } from 'react';
import LoginHeader from "../LoginHeader/loginheader";



const ClientLista = () => {
  const [clients, setClients] = useState([]);


  useEffect(() => {

    getList()

  }, []);

  const getList = async () => {
    try {
      const response = await fetch('http://127.0.0.1:5001/post_cliente', { method: 'POST' });
      const data = await response.json();
      setClients(data.clientes);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const loginClient = (clientId) => {
    
    // Implemente essa lógica de acordo com suas necessidades
  
  
  };

  

return (
  <div className="App">
    <div id="clients-list">

      {clients.map((cliente, index) => (
        <div className='cliente'>
          <article key="id" className="clients" id="id">
            <div key="index">
              <h3 className="nome-client">
                <span>Sr./Sra.{clients.nome} </span>
              </h3>

              <p className="sobrenome-client">{clients.sobrenome}</p>


              <p className="e_mail-client">{clients.e_mail}</p>

              <p className= "senha-client">{clients.senha}</p>

  
              <button
                className="client-login"
                type="button"
                onClick={() => loginClient("id")}>Entrar


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

