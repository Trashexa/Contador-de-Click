
import './App.css';
import Boton from './componentes/boton';
import Contador from './componentes/contador';
import { useState } from "react"; 



function App() {

const [numeroDeClicks, setNumeroDeClicks] = useState(0,); 


const manejarClick= ()=> {
  setNumeroDeClicks(numeroDeClicks + 1);
}
const reiniciarContador= ()=>{
  setNumeroDeClicks(numeroDeClicks - numeroDeClicks);
  
}

  return (
    <div className="App">
      <div className='contenedor-principal'>
        <Contador 
          numeroDeClicks={numeroDeClicks} />
        <Boton 
        texto="Click"
        esBotonDeClick={true}
        manejarClick={manejarClick} />
        <Boton 
        texto="Reiniciar"
        esBotonDeClick={false}
        manejarClick={reiniciarContador} />
      </div> 
    </div>
  );
}

export default App;
