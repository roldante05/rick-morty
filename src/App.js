import imagenRickMory from "./img/rick-morty.png";
import "./App.css";
import Characters from "./components/Characters";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={imagenRickMory} alt="Rick0 & Morty" className="img-home" />
        <h1 className="title">Rick & Morty</h1>
        <Characters></Characters>
      </header>
    </div>
  );
}

export default App;
