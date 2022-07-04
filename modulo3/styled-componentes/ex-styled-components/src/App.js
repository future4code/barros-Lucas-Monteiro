import './App.css';
import { Cabecalho } from './Componentes/Cabecalho';
import {Estrutura} from "./Componentes/corpo";
import {Pe} from "./Componentes/Rodape"


function App() {
  return (
    <div className="App">
      <Cabecalho />
      <Estrutura />
      <Pe />
    </div>
  );
}

export default App;
