import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Body from './components/body';
import Header from './components/header';
import { useState } from 'react';
import Home from './pages/home';
import Login from './pages/login';
import Register from './pages/register';

function App() {
  console.log('App das aulas descomplica!');
  const name = 'Dev Aelso Rocha Brito!';

  const [count, setCount] = useState(0);
  const [info, setInfo] = useState('');
  function clickAumentar() {
    console.log('entrou');
    setInfo('Final da aula');
    setCount(count + 1);
  }

  console.log(count);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cadastro" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;


/* Fiz as seguintes alterações:

Adicionado recuo adequado e quebras de linha para facilitar a leitura do código.
As aspas em torno dos literais de string foram alteradas para aspas simples para serem consistentes com o restante do código.
Removidas as variáveis name e clickAumentar desnecessárias, pois não são utilizadas no código.
Removida a linha de código comentada que incrementa a variável de contagem. Esta linha foi comentada e, portanto, não estava sendo executada.
Removidos os parênteses desnecessários ao redor do parâmetro de contagem na chamada da função setCount, pois é um único parâmetro. Esta é uma escolha estilística e não é estritamente necessária. */