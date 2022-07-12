import React from "react";
import "./Info.css";
import Face from "../images/GR-PP.png";

const About = () => {
  return (
    <div className="infoCard">
      <img className="Face" alt="Face" src={Face} />
      <p className="hi">My name is Garrett Rose.</p>
      <p className="look">
        I am a web developer creating and learning all of the time.
      </p>
    </div>
  );
};

export default About;
