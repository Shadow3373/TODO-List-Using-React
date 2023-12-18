import React from "react";
import { useState } from "react";

const Content = () => {
  function handleNamechange() {
    const names = ["Earn", "Grow", "Give"];
    const int = Math.floor(Math.random() * 3);
    return names[int];
  }

  const handleClick = (e) => {
    console.log(e.target.innerText);
  };
  const handleClick2 = (name) => {
    console.log("Thanks for the Support Bala");
  };

  return (
    <main>
      <p className="btn2"> Lets Earn Money </p>
      <button className="btn1">Subscribe</button>
      <button className="btn1">-</button>
      <span className="btn1">0</span>
      <button className="btn1">+</button>
    </main>
  );
};

export default Content;
