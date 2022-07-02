import React, {useState} from 'react'
import "./LogoGR.css";
import Logo from "../images/logo.png";
import Logo2 from "../images/logo2.png"

const LogoGR = () => {
  const [over, setOver] = useState(false);
  return (
    <div onMouseOver={() => setOver(true)} onMouseOut={() => setOver(false)}>
    
      {/* <HoverImage class="defaultLogo" src ={Logo} hoverSrc={Santorini}/> */}
      {/* <img class="defaultLogo" src={Logo} alt="logo"/> */}
      {/* <img class="hoverImg" src={Santorini} alt="santorini"/> */}
      <img class="defaultLogo" src={over ? Logo2 : Logo}/>
      <h1>Garrett Rose</h1>
    </div>
  );
};

export default LogoGR;
