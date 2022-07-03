import React, { useState } from "react";
import "./LogoGR.css";
import Logo from "../images/logo.png";
import Face from "../images/GR-Profile-blue.png";


const LogoGR = () => {
  const [over, setOver] = useState(false);
  return (
    <div>
      <img onMouseOver={() => setOver(true)} onMouseOut={() => setOver(false)} class="defaultLogo" alt="defaultLogo" src={over ? Face : Logo} />
      <h1 class="myName">Garrett Rose</h1>
    </div>
  );
};

export default LogoGR;
