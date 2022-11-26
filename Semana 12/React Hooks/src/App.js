import React from 'react';
import Voos from "./Voos";
import Lista from "./lista";
import { AssentosOnibus } from "./AssentosOnibus";
import { Viacep } from './Viacep';

const Titulo = () => (
  <h2>
    <span>Olá</span>
    <strong>Mundo</strong>
    !!!
  </h2>
)

class MeuBotao extends React.Component {
  // const handleClick = (e)=>{
  //   console.log('Clicou no botão',e)
  // };

  imprime() {
    console.log('Clicou no botão', e)
  };

  handleClick = (e) => {
    e.preventDefault();
    this.imprime();
  }
  render() {
    return (
      <a onClick={this.handleClick.bind(this)} href="www.descomplica.com.br" type="button">{this.props.label} - {this.props.idade}</a>
    )
  }
}
function App() {
  const labelBotao = "Entre aqui"
  return (
    <div className="App">
      <Titulo />
      <Viacep />
      <AssentosOnibus />
      <MeuBotao label={'${labelBotao} !!!!'} idade={30} />
      <Voos />
      <Lista />
      <Pessoa idade={25} />
      <Pessoa idade={45} />
      <Pessoa idade={35} />
      <Pessoa idade={23} />
      <Pessoa idade={23} />
      <article>
        <h2>Subtitulo</h2>
        <p> lorem ip </p>
      </article>
    </div>
  );
}

export default App;
