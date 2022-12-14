import { useState } from 'react';
import { Button, Form, Container } from 'react-bootstrap';
import { addUser } from '../service/api';

const initialValue = {
  name: "",
  email: "",
  phone: "",
}

const onValueChange = (setUser) => (e) => {
  setUser({ ...user, [e.target.name]: e.target.value });
}

async function addUserDetails(user) {
  try {
    await addUser(user);
  } catch (error) {
    console.error(error);
  }
}

function Cadastro() {
  const [user, setUser] = useState(initialValue);
  const { name, email, phone } = user;

  return (
    <Container>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter your name"
          onChange={onValueChange(setUser)}
          name="name"
          value={name}
          required
        />
        <Form.Control.Feedback type="invalid">
          Please enter your name.
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          onChange={onValueChange(setUser)}
          name="email"
          value={email}
          required
        />
        <Form.Control.Feedback type="invalid">
          Please enter a valid email address.
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Phone</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter phone number"
          onChange={onValueChange(setUser)}
          name="phone"
          value={phone}
          required
        />
        <Form.Control.Feedback type="invalid">
          Please enter your phone number.
        </Form.Control.Feedback>
      </Form.Group>

      <Button onClick={() => addUserDetails(user)} variant="primary">
        Save
      </Button>
    </Container>
  );
}

export default Cadastro;


/* Algumas das mudan??as que fiz incluem:

Definindo a constante initialValue com uma string vazia para o campo de telefone.
Definir a fun????o onValueChange fora do JSX e vincul??-la aos campos do formul??rio usando a propriedade onChange.
Envolvendo o formul??rio e o bot??o em um componente <Container> e usando as classes .row e .col para definir o layout.
Adicionando valida????o de formul??rio usando o atributo obrigat??rio e o componente Form.Control.Feedback.
Definindo a fun????o addUserDetails como ass??ncrona e usando o try / catch para lidar com erros. */