import React, { useState } from "react";
import "./Calculator.css";

function Calculator() {
  return (
    <div className="Calculator">
      <input type="number" id="input" />
      <div className="buttons">
        <button id="clear">C</button>
        <button id="divide">/</button>
        <button id="multiply">X</button>
        <button id="seven">7</button>
        <button id="eight">8</button>
        <button id="nine">9</button>
        <button id="minus">-</button>
        <button id="four">4</button>
        <button id="five">5</button>
        <button id="six">6</button>
        <button id="plus">+</button>
        <button id="one">1</button>
        <button id="two">2</button>
        <button id="three">3</button>
        <button id="equals">=</button>
        <button id="zero">0</button>
        <button id="decimal">.</button>
      </div>
    </div>
  );
}

export default Calculator;
