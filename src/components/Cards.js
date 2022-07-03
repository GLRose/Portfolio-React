import React, {useEffect, useState} from "react";
import "./Cards.css";

const Cards = () => {
  const [front, setFront] = useState(false);
  //ever time an event fires, useEffect will happen as an after effect 
  useEffect(() => { 
    console.log(front);
   });
  return (
    <div class="card">
      <h1>Project1</h1>
      <h1>Project2</h1>
      <h1>Project3</h1>
    </div>
  );
};

export default Cards;
