import React from "react";
import "./Navbar.css";
import { AiFillGithub, AiFillCodepenCircle, AiFillLinkedin } from "react-icons/ai";
import { HiOutlineDocumentDownload } from "react-icons/hi";
import Pdf from "../credentials/resume.pdf";

const Navbar = () => {
  return (
    <div className="navbar">
      <ul>
        <li>
          <a href="./index.html">Home</a>
        </li>
        <li>
          <a href="#Face">About</a>
        </li>
        <li>
          <a href="#Card">Projects</a>
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
        <a href="https://www.linkedin.com/in/garrett-rose-b0974a131/" title="linkedin">
          <AiFillLinkedin  className="socials" />
        </a>
      </ul>
    </div>
  );
};

export default Navbar;
