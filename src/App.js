import React from "react";
import "./App.css";
import "./Index.css";
import "./components/Navbar.js";
import Navbar from "./components/Navbar.js";
import Info from "./components/Info.js";
import Cards from "./components/Cards.js";
import LogoGR from "./components/LogoGR";
import About from "./components/About.js";


function App() {
  return (
    <div className="App">
      <LogoGR />
      <Navbar />
      <Info />
      <About/>
      <Cards />
    </div>
  );
}

export default App;
