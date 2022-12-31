import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function Login() {
  return (
    <div className='loginClass'>
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter your email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Remember me" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Login
        </Button>
      </Form>
    </div>
  );
}

/* Algumas das mudanças que fiz incluem:

Removendo a prop className desnecessária dos elementos <Form.Group>.
Alterando o rótulo da caixa de seleção de "Verifique-me" para "Lembrar-me".
Alterar a ordem dos elementos no formulário para corresponder à ordem típica de um formulário de login (e-mail, senha, lembrar-me, botão de login).
Espero que essas alterações ajudem a melhorar a legibilidade e a manutenção do seu código! Entre em contato se tiver alguma dúvida. */
