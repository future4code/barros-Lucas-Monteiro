import img from './img/lucas.png';
import './App.css';

function App() {

  function botao (){
    alert ("Boa noite! Você tem um minuto para ouvir a palavra do react hoje?")
  }

  return (
    <div className="local">
      <h3>Seja Bem-Vindo! E não fique desesperado! By: Lucas Monteiro</h3>
      <img src={img} className="fotoPerfil" alt="Lucas sentado em frente a uma parede com plantas pintadas" />
      <p>
        Tentando manter a calma com o React... Siga o guru!
      </p>
      <button onClick={botao}>Aperte este botão</button>
    </div>
  );

}

export default App;
