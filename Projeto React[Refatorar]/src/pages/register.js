import React from 'react';
import Cadastro from '../components/Cadastro';
import FooterComponent from '../components/Footer';
import Header from '../components/Header';

const Register = () => {
    const name = 'Aula Descomplica - React';

    return (
        <>
            <Header name={name} />
            <div className="registerClass">
                <Cadastro />
            </div>
            <FooterComponent />
        </>
    );
};

export default Register;

/*Fiz as seguintes alterações:

Importou o módulo React na parte superior do arquivo para habilitar a sintaxe JSX.
Os nomes dos componentes foram alterados para ter uma primeira letra maiúscula, que é a convenção de nomenclatura recomendada para componentes React.
Adicionado um componente FooterComponent na parte inferior da árvore de componentes.
Alterou a função para ser uma constante com um nome usando a sintaxe de função de seta.
Adicionado recuo adequado e quebras de linha para facilitar a leitura do código. */