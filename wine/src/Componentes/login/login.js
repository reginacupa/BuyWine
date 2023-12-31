import React from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';



function GridComplexExample() {
  return (
    <Form>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Entre com email" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Senha</Form.Label>
          <Form.Control type="password" placeholder="Senha" />
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Label>Endereço</Form.Label>
        <Form.Control placeholder="Rua, Av, " />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formGridAddress2">
        <Form.Label>Endereço para entrega</Form.Label>
        <Form.Control placeholder="Deixar em branco se o endereço for o mesmo acima" />
      </Form.Group>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>Cidade</Form.Label>
          <Form.Control />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>Estado</Form.Label>
          <Form.Select defaultValue="Escolher...">
            <option>Escolher...</option>
            <option>Acre</option>
            <option>Alagoas </option>
            <option>Amapá</option>
            <option>Amazonas </option>
            <option>Bahia </option>
            <option>Ceará </option>
            <option>Distrito Federal</option>
            <option>Espirito Santo</option>
            <option>Goiás</option>
            <option>Mato Grosso</option>
            <option>Mato Grosso do Sul </option>
            <option>Maranhâo</option>
            <option>Minas Gerais </option>
            <option>Pará</option>
            <option>Paraíba</option>
            <option>Paraná</option>
            <option>Pernanbuco</option>
            <option>Piauí</option>
            <option>Rio de Janeiro </option>
            <option>Rio Grande do Norte</option>
            <option>Rio Grande do Sul </option>
            <option>Rondônia</option>
            <option>Roraima </option>
            <option>Santa Catarina</option>
            <option>São Paulo</option>
            <option>Sergipe</option>
            <option>Tocantins </option>
          </Form.Select>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridZip">
          <Form.Label>CEP</Form.Label>
          <Form.Control />
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" id="formGridCheckbox">
        <Form.Check type="checkbox" label="Chick aqui para receber nossas notícias" />
      </Form.Group>

      <Button variant="primary" type="Enviar">
        Enviar
      </Button>
    </Form>
  );
}


export default GridComplexExample;

