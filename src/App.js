import "./App.css";
import Header from "./Components/Header.js";
import Body from "./Components/Body.js";
import Produit from "./Components/Produit.js";
import Qui from "./Components/Qui.js";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="left">&nbsp;</div>
        <div className="right">&nbsp;</div>
        <Header />
        <div className="slogan">
        <p><span className="freco">Freco</span>, le plus écolo des frigos !</p>
        </div>
        <Body />
        <Qui />
        <Produit />
      </div>
    </div>
  );
}

export default App;
