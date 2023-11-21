import logo from './logo.svg';

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h4>
          Fau Aka Le BOSS 
        </h4>
        
        <p>
          Nom d'utilisateur :  
          <input type="text"></input>
        </p>
        <p>
          Mot de passe :  
          <input type="password"></input>
        </p>
        
      </header>
    </div>
  );
}

export default App;
