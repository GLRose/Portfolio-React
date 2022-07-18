import React from "react";
import "./Cards.css";
import Todo from "../images/Todo.PNG";
import Typing from "../images/typingGame.PNG"
import Git from "../images/git.PNG"

const Cards = () => {
  return (
    <div className="card" id="card">
      <a href="https://github.com/GLRose/React-TodoList" className="box">
        <img src={Todo} alt="git" />
      </a>
      <a href="https://github.com/GLRose/typingGame" className="box">
        <img src={Typing} alt="git" />
      </a>
      <a href="https://github.com/GLRose/learning-react" className="box">
        <img src={Git} alt="git" />
      </a>
    </div>
  );
};

export default Cards;
