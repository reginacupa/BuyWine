import React from "react";
import { useState } from "react";
import UserForm from '../../Componentes/Userform/userform.css';

export const Form = () => {
    const [name, setName] = useState();
    const [lastname, setLastname] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState ();
    const [nome, setNome] = useState();

    const [client, setClient] = useState ();

    const cadastroClient = async () => {
        const dados = {
        nome: name,
        sobrenome: lastname,
        e_mail: email,
        senha:password
    
    }
    
    try {
        const response = await fetch('http://127.0.0.1:5001/post_cliente', {method: 'POST',
        headers:{'Content-type': 'application/json',}, 
        body: JSON.stringify(dados)
        
          
    
    })

    return response
    }catch(error){
        console.error(error);
    }
    }
    console.log(cadastroClient)


    
    return (
        <div className="Form">
            <form>
                <label>Nome</label>
                <input type="string" required value={name}
                onChange={e => {
                
                    setName(e.target.value)
                }}
                />

                <label>Sobrenome</label>
                <input type="string" required value={lastname}
                onChange={e => {
                    setLastname(e.target.value)
                }}
                />

                <label>email</label>
                <input type="string" required value={email}
                onChange={e => { 
                    setEmail(e.target.value)
                }}
                />

                <label>senha</label>
                <input type="string" required value={password}
                onChange={e => {    
                    setPassword(e.target.value)
                }}
                />

                
                <button
                className="enviar"
                type="button"
                onClick={() => cadastroClient()}>Enviar
                </button> 


            </form>
        </div>
    )
}

            





