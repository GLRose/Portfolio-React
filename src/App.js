import "./App.css";
import "./Index.css";
import "./components/Name.js";
import Name from "./components/Name.js";
import Info from "./components/Info.js";
import Cards from "./components/Cards";
import LogoGR from "./components/LogoGR";

function App() {
  return (
    <div className="App">
      <LogoGR />
      <Name />
      <Info />
      <Cards />
    </div>
  );
}

export default App;
