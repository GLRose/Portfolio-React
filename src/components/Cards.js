import React from "react";
import "./Cards.css";
import Todo from "../images/Todo.PNG";
import Typing from "../images/typingGame.PNG";
import Git from "../images/git.PNG";

const Cards = () => {
  return (
    <div className="Card" id="Card">
      <div className="breakfast">
        <p>React Js Breakfast List</p>
        <a href="https://glrose.github.io/breakfast-picker/" className="box">
          <img src={Todo} alt="git" />
        </a>
      </div>
      <div className="scraper">
        <p>Web Scraper</p>
        <a
          href="https://github.com/GLRose/Runescape-Top100-Scraper"
          className="box"
        >
          <img src={Git} alt="git" />
        </a>
      </div>
      <div className="typingGame">
        <p>C++ Typing Game</p>
        <a href="https://github.com/GLRose/typingGame" className="box">
          <img src={Typing} alt="git" />
        </a>
      </div>
  
    </div>
  );
};

export default Cards;
