import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

function UncontrolledExample() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://cdn.dooca.store/624/posts/vinho-tinto.jpg?v=1626187244&webp=0"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Quem Somos</h3>
          <p>Três amigos que amam desgustar vinhos e a cultura milenar que esta bebida trás, e a vontade de transmitir esse conhecimento adquirido por muitas viagens a vinícolas de todo mundo, degustações, cursos, etc. foi a origem da <b>Tim Tim Import</b></p>
          <p><b>Nossa Missão</b> é levar a todos os clientes e amigos um produto acessível e de boa qualidade, sem ter que sair do conforto do seu lar.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i0.wp.com/www.wine.com.br/winepedia/wp-content/uploads/2018/08/A-cultura-do-vinho-na-%C3%81frica-do-Sul.jpg?fit=1200%2C526&ssl=1"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Conhecendo um pouco mais</h3>
          <p>O vinho é uma bebida muito sofisticada e que apresenta várias características que ajudam a definir seu sabor, aroma, coloração, produção, tipo de uva e até gradação alcoólica. Por isso, é possível classificar cada vinho de diferentes maneiras. Ao escolher um vinho para servir em uma refeição, ou para saborear com os amigos, é interessante conhecer essas informações, optando por aquela bebida que mais agrada o seu estilo de paladar.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://roldao.com.br/wp-content/uploads/2020/06/Vinhos-bons-e-baratos-%E2%80%93-Como-escolher-vinho.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Cores dos vinhos</h3>
          A cor de um vinho pode ter relação com o tipo de uva utilizada para sua preparação, assim como com o seu processo de fermentação. Três colorações de vinho podem ser encontradas para consumo:
          <p><b>Vinho tinto:</b> elaborado a partir de uvas de coloração avermelhada ou roxa. É o tipo mais comercializado dessa bebida em todo o mundo.</p>
          <p><b>Vinho branco</b>: elaborado a partir da fermentação de uvas brancas ou escuras, porém sem o uso da casca.</p>
          <b>Vinho rosé</b>: elaborado a partir de uvas escuras, porém que liberam pouca coloração ao processo de fermentação. Podem também ser um blend de uma preparação tinta e outra branca, resultando na coloração rosa suave.
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;