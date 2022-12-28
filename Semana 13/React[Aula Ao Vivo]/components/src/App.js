import './App.css';
import Header from './components/header';
import Body from './components/body';
import Footer from './components/footer';
import { useState } from 'react';



function App() {
  console.log('Helo World')
  const name = "Aelso Brito : )";
  const [count, setCount] = useState(0);
  const [info, setInfo] = useState('')
  function clickAumentar() {
    //setCount(count + 1);
    console.log('entrou')
    setInfo('Final da aula')
    setCount(count + 1);
  }

  return (
    <div className="App">
      <Header name={name} />
      <Body clickAumentar={clickAumentar} />
      <h3>Info:{setInfo}</h3>
      <Footer />

    </div>
  );
}

export default App;
