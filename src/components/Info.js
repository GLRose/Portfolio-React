import React from "react";
import "./Info.css";
import Face from "../images/GR-PP.png";
import Pdf from "../credentials/resume.pdf";

const About = () => {
  return (
    <div className="infoCard">
      <a href={Pdf} download="resume.pdf" title="resume"><img className="Face" id="Face" alt="Face" src={Face} /></a>
      <p className="hi">My name is Garrett Rose.</p>
      <p className="look">
        I am a web developer creating and learning all of the time.
      </p>
    </div>
  );
};

export default About;
