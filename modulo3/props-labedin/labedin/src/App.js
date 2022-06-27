import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem="https://scontent.frec5-1.fna.fbcdn.net/v/t39.30808-6/261292256_4314356108675612_6027503158559602939_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeEhLXUyz4qxHjDPmKvnXGMWBGYMCM3MUpEEZgwIzcxSkTmxnVU7NEJntROK4GoaNfM9ySQtkwHKbf4_cVbXGWIq&_nc_ohc=GypMpTdK9HEAX9jK9Lm&_nc_ht=scontent.frec5-1.fna&oh=00_AT9xQXk9IiV56b3SStmJYxBH5LltuKptMqHrq6P-OSF6xg&oe=62B978CC" 
          nome="Lucas Monteiro" 
          descricao="Na minha jornada profissional sempre prezo pela comunicação
          e colaboração entre a equipe. Quando se tem início de um
          novo desafio profissional, sempre busco observar para adquirir
          conhecimentos e colocá-los em prática de uma maneira orgânica e
          funcional.
          "
        />
        
        <ImagemButton 
          imagem="https://cdn-icons-png.flaticon.com/512/271/271210.png" 
          texto="Ver mais"
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://media.staticontent.com/media/pictures/47b6f22a-296c-4367-b033-0ed0c8979cd7/1200x630" 
          nome="Golden Beach" 
          descricao="Comecei como técnico em informática e hhoje estou como assistente administrativo." 
        />
        
        <CardGrande 
          imagem="https://barrosmelo.edu.br/assets/file/news/2192/39e11d648ea5ddd209136840b75db6a91401903752.jpg/x/450" 
          nome="Aeso Barros Melo" 
          descricao="Estagiário no setor de T.I." 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
