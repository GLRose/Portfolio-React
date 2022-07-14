import React from "react";
import "./LogoGR.css";
import Logo from "../images/logo.png";

const LogoGR = () => {
  return (
    <div className="default" id="index">
      <img className="defaultLogo" alt="defaultLogo" src={Logo} />
    </div>
  );
};

export default LogoGR;
