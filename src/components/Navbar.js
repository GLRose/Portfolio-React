import React from "react";
import "./Navbar.css";
import {
  AiFillGithub,
  AiFillCodepenCircle,
} from "react-icons/ai";
import { AiFillFileText } from "react-icons/ai";
import Pdf from "../credentials/resume.pdf";

const Navbar = () => {
  return (
    <div>
      <ul>
        <li>
          <a href="/index.html">Home</a>
        </li>
        <li>
          <a href="#About">About</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <a href="https://github.com/GLRose" title="github">
          <AiFillGithub className="socials" />
        </a>
        <a href="https://codepen.io/glrose/pens/public" title="codepen">
          <AiFillCodepenCircle className="socials" />
        </a>
        <a href={Pdf} download="resume.pdf" title="resume">
          <AiFillFileText className="socials" />
        </a>
      </ul>
    </div>
  );
};

export default Navbar;
