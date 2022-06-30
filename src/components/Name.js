import React from "react";
import "./name.css";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillCodepenCircle,
} from "react-icons/ai";
import { AiFillFileText } from "react-icons/ai";
import Pdf from "../credentials/resume.pdf";

const Name = () => {
  return (
    <div>
      <ul>
        <li>
          <a href="#about">about</a>
        </li>
        <li>
          <a href="#goals">goals</a>
        </li>
        <li>
          <a href="#projects">projects</a>
        </li>
        <li>
          <a href="#experience">experience</a>
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

export default Name;
