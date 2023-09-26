import React,  { useState } from "react";


function CepFinder() {
    const [edicao] = useState(false);
    const [setCep] = useState("");
    const [setData] = useState({});
    const [setModalVisible] = useState(false);

    const handleCepChange = (event) => {
        if (!edicao) {
            const newCep = event.target.innerHTML;
            setCep(newCep);
            getEndereco(newCep);
        }
    };

    const getEndereco = (cep) => {
        // Limpa os resultados anteriores
        setData({});

        fetch(`https://viacep.com.br/ws/${cep}/json/`)
            .then((response) => response.json())
            .then((responseData) => {
                setData(responseData);
                // Exibe o modal
                setModalVisible(true);
            });
    };

    const closeModal = () => {
        setModalVisible(false);
    };

    return (
        <div>
            <table>
                <tbody>
                    <tr>
                        <td onClick={handleCepChange}>CEP</td>
                        <td onClick={handleCepChange}>____-___</td>
                        {/* Adicione mais células de CEP, se necessário */}
                    </tr>
                </tbody>
            </table>
            
           
            
        </div>
    );
}
        


export default CepFinder;
