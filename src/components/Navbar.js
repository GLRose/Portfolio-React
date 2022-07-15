import React from "react";
import "./Navbar.css";
import { AiFillGithub, AiFillCodepenCircle } from "react-icons/ai";
import {HiOutlineDocumentDownload} from "react-icons/hi";
import Pdf from "../credentials/resume.pdf";

const Navbar = () => {
  return (
    <div className="navbar">
      <ul>
        <li>
          <a href="./">Home</a>
        </li>
        <li>
          <a href="#Face">About</a>
        </li>
        <li>
          <a href="#card">Projects</a>
        </li>
        <a href="https://github.com/GLRose" title="github">
          <AiFillGithub className="socials" />
        </a>
        <a href="https://codepen.io/glrose/pens/public" title="codepen">
          <AiFillCodepenCircle className="socials" />
        </a>
        <a href={Pdf} download="resume.pdf" title="resume">
          <HiOutlineDocumentDownload className="socials" />
        </a>
      </ul>
    </div>
  );
};

export default Navbar;
