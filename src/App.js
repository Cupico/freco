import "./App.css";
import Header from "./Components/Header.js";
import Body from "./Components/Body.js";
import Produit from "./Components/Produit.js";
import Qui from "./Components/Qui.js";

function App() {
  return (
    <div className="App">
      <div className="left">&nbsp;</div>
      <div className="right"></div>
      <Header />
      <Body />
      <Qui />
      <Produit />
    </div>
  );
}

export default App;
