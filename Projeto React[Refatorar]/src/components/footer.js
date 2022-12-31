import React from 'react';
import { Button, Form } from 'react-bootstrap';

class FooterComponent extends React.Component {
  render() {
    return (
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    );
  }
}

export default FooterComponent;


/* Fiz as seguintes alterações:

Adicionado recuo adequado e quebras de linha para facilitar a leitura do código.
Removidas as tags <> e </> desnecessárias da instrução de retorno. Essas tags são chamadas de "fragmentos React" e são usadas para agrupar uma lista de elementos JSX quando você não deseja adicionar um elemento extra ao DOM. Como o elemento Form já está envolvendo todos os outros elementos, os fragmentos não são necessários. */