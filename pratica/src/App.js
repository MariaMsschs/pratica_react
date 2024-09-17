import logo from './logo.svg';
import './App.css';
import Titulo from "./components/Add/Titulo.jsx"
import Template from "./components/Template/Template.jsx"
import check from "./assets/check.png"
import xis from "./assets/xis.png"

function App() {
  const titulo = <p>Plans +</p>
  const plano = <p>Free</p>
  return (
    <>
      <Titulo titulo = {titulo}/>
      <Template plano = {plano} imgSrc={check}/>
    </>
  );
}

export default App;