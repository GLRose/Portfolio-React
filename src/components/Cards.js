import React from "react";
import "./Cards.css";
import Todo from "../images/Todo.PNG"

const Cards = () => {
  return (
    <div className="card">
      <a href="https://github.com/GLRose/React-TodoList" className="box"><img src={Todo} alt="git"/></a>
      <a href="https://github.com/GLRose/React-TodoList" className="box"><img src={Todo} alt="git"/></a>
      <a href="https://github.com/GLRose/React-TodoList" className="box"><img src={Todo} alt="git"/></a>
    </div>
  );
};

export default Cards;
