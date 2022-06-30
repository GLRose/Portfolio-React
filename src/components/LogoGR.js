import React from "react";
import Logo from "../images/logo.png";
import "./LogoGR.css";

const LogoGR = () => {
  return (
    <div>
      <img class="defaultLogo" src={Logo} alt="logo" />
      <h1>Garrett Rose</h1>
    </div>
  );
};

export default LogoGR;
