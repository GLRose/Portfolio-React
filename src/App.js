import React from 'react'
import "./App.css";
import "./Index.css";
import "./components/Navbar.js";
import Navbar from "./components/Navbar.js";
import Info from "./components/Info.js";
import Cards from "./components/Cards";
import LogoGR from "./components/LogoGR";

function App() {
  return (
    <div className="App">
      <LogoGR />
      <Navbar />
      <Info />
      <Cards />
    </div>
  );
}

export default App;
