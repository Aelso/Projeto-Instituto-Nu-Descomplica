import React from 'react';
import { Nav, Navbar, Container } from 'react-bootstrap';

const Header = (props) => {
    console.log(props.name);

    return (
        <Navbar bg="primary" variant="dark">
            <Container>
                <Navbar.Brand href="#home">{props.name}</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/cadastro">Cadastro</Nav.Link>
                    <Nav.Link href="#pricing">Pricing</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
};

export default Header;

/* Fiz as seguintes alterações:

Importou o módulo React na parte superior do arquivo para habilitar a sintaxe JSX.
Usou a sintaxe de atribuição de desestruturação para importar os componentes Nav, Navbar e Container do módulo react-bootstrap.
Alterado o componente para ser uma constante com um nome usando a sintaxe da função de seta.
Adicionado o valor props.name como o texto do componente Navbar.Brand.
Removido o bloco de código comentado na parte inferior do arquivo.
 */