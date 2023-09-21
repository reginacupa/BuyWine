import React,  { useState } from "react";

function CepFinder() {
    const [edicao, setEdicao] = useState(false);
    const [cep, setCep] = useState("");
    const [data, setData] = useState({});
    const [modalVisible, setModalVisible] = useState(false);

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
                        <td onClick={handleCepChange}>CEP1</td>
                        <td onClick={handleCepChange}>CEP2</td>
                        {/* Adicione mais células de CEP, se necessário */}
                    </tr>
                </tbody>
            </table>
            
            {modalVisible && (
                <div id="myModal" className={`modal ${isOpen ? "show" : ""}`}>
                    <div className="modal-content">
                        <div id="Resultados">
                        <h2>Resultados</h2>
                        <p><strong>CEP:</strong> {data.cep}</p>
                        <p><strong>Logradouro:</strong> {data.logradouro}</p>
                        <p><strong>Complemento:</strong> {data.complemento}</p>
                        <p><strong>Bairro:</strong> {data.bairro}</p>
                        <p><strong>Cidade:</strong> {data.localidade}</p>
                        <p><strong>Estado:</strong> {data.uf}</p>
                        </div>
                    </div>

                    <div>
                        <span id="close" className="addBtn" onClick={handleClose}>&times;</span>
                    </div>

                </div>
            )}
        </div>
    );
}



export default CepFinder;
