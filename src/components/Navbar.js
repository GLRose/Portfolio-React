import React from "react";
import "./Navbar.css";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillCodepenCircle,
} from "react-icons/ai";
import { AiFillFileText } from "react-icons/ai";
import Pdf from "../credentials/resume.pdf";

const Navbar = () => {
  return (
    <div>
      <ul>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#goals">Goals</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <a href="https://github.com/GLRose">
          <AiFillGithub class="socials" />
        </a>
        <AiFillLinkedin class="socials" />
        <AiFillCodepenCircle class="socials" />
        <a href={Pdf} download="resume.pdf">
        <AiFillFileText class="socials" />
        </a>
      </ul>
    </div>
  );
};

export default Navbar;
