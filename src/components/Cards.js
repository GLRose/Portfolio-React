import React from "react";
import "./Cards.css";
import Todo from "../images/Todo.PNG"
import Git from "../images/git.PNG"


const Cards = () => {
  return (
    <div className="card">
      <a href="https://github.com/GLRose/React-TodoList"><img src={Todo} alt="git"/></a>
      <img src={Git} alt="git"/>
    </div>
  );
};

export default Cards;
