import React, { useState } from "react";
import "./Form.css";


const Form = () => {
  const [input, setInput] = useState({
    message: "",
  });
  const handleInput = (e) => {
    setInput((input) => ({ message: e.target.value }));
  };
  console.log(input);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:5000/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(input),
    }).then(() => console.log("added"));
  };

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
      <h1>Inquiries</h1>
        <textarea
          type="text"
          id="message"
          name="message"
          value={input.message}
          onChange={handleInput}
        />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};
export default Form;
