import './App.css';
import Header from './components/header';
import Body from './components/body';
import Footer from './components/footer';


function App() {
  console.log('Helo World')
  const name = "Aelso Brito : )"
  return (
    <div className="App">
      <Header name = {name}/>
      <Body  />
      <Footer />
           
    </div>
  );
}

export default App;
