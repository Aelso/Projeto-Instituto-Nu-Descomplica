import React from 'react';

const Body = ({ clickAumentar }) => {
  return (
    <div>
      <h1>Hello World!</h1>
      <button onClick={clickAumentar}>Aumentar</button>
    </div>
  );
};

export default Body;


/* Fiz as seguintes alterações:

Importou o módulo React na parte superior do arquivo para habilitar a sintaxe JSX.
Alterou a função para ser uma constante com um nome usando a sintaxe de função de seta.
Adicionado recuo adequado e quebras de linha para facilitar a leitura do código.
Removidos os parênteses ao redor do parâmetro clickAumentar, pois é um único parâmetro. Esta é uma escolha estilística e não é estritamente necessária. */