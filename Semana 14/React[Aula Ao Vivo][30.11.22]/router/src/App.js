
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import Body from './components/body';
import Header from './components/header';
import Footer from './components/footer';
import {useState} from 'react';
import Home from './pages/home';
import Login from './pages/login';
import Register from './pages/register';


function App() {
  console.log('App das aulas da descomplica!')
  const name = "Dev Aelso Rocha Brito!";

  const [count, setCount ] = useState(0);
  const [info, setInfo] = useState('')
  function clickAumentar(){
    //setCount(count + 1);
    console.log('entrou')
    setInfo('Final da aula')
    setCount(count + 1);
  }

  console.log(count)
 
  //https://github.com/Aelso/Instituto-Nu-e-Descomplica-Exercicios
  
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/cadastro' element={<Register />}/>
            <Route path='/login' element={<Login />}/>
        </Routes>
      </BrowserRouter> 
       
      
    </div>
  );
}

export default App;