import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "../../Componentes/Cards/cards.css";

function BasicExample() {

  return (

    <>
    <Card style={{ width: '10rem', height:'4rem'}}>
      <Card.Img src="https://cdn.mistral.com.br/products/35015/img_m_35015.png" />
      <Card.Body>
        <Card.Title><h5>Montes Alpha - Cabernet Sauavignon</h5></Card.Title>
        <Card.Text>
        <h6>Verdadeiro clássico da América do Sul, o Montes Alpha foi o primeiro grande tinto chileno, inspirado nos melhores vinhos de Bordeaux.  Um vinho excelente, de imbatível relação qualidade/preço.</h6>
        <p><b>Preço: R$ 259,23</b></p>
        </Card.Text>
        <Button variant="primary">Comprar</Button>
      </Card.Body>

      <Card.Img variant="top" src="https://cdn.mistral.com.br/products/35378/img_m_35378.png"/>
      <Card.Body>
        <Card.Title><h5>Alamos - Malbec</h5></Card.Title>
        <Card.Text>
        <h6>O consagrado Alamos Malbec é um dos mais emblemáticos vinhos da Argentina. Sem dúvida um dos eternos achados do Novo Mundo e um dos mais clássicos Malbecs da Argentina. Muito recomendado!</h6>
        <p><b>Preço: R$ 113,32</b></p>
        </Card.Text>
        <Button variant="primary">Comprar</Button>
      </Card.Body>

      <Card.Img variant="top" src="https://cdn.mistral.com.br/products/35203/img_m_35203.png" />
      <Card.Body>
        <Card.Title><h5>Angélica Zapata - Merlot</h5></Card.Title>
        <Card.Text>
        <h6>Complexo e sofisticado, o cativante Angelica Zapata Merlot é um pouco mais macio e sedoso que cultuado Angelica Malbec, sendo uma companhia perfeita para massas, pizzas e até hambúrgueres. Um vinho de pequena produção, antes vendido somente na Argentina, é uma verdadeira revelação para quem ainda não provou um grande Merlot deste país.</h6>
        <p><b>Preço: R$ 268,08</b></p>
        </Card.Text>
        <Button variant="primary">Comprar</Button>
      </Card.Body>

      <Card.Img variant="top" src="https://cdn.mistral.com.br/products/34423/img_m_34423.png" />
      <Card.Body>
        <Card.Title><h5>Catena - Malbec</h5></Card.Title>
        <Card.Text>
        <h6>Este é o tinto que mostrou ao mundo o potencial da casta Malbec para originar vinhos de classe mundial.  Eleito mais de uma vez um dos “100 Melhores Vinhos do Mundo” pela Wine Spectator, é uma referência absoluta.</h6>
        <p><b>Preço: R$ 187,38</b></p>
        </Card.Text>
        <Button variant="primary">Comprar</Button>
      </Card.Body>
    </Card>

    </>

  );
}

export default BasicExample;
