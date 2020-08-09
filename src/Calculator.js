import React, { useState } from "react";
import "./Calculator.css";
import Button from "./components/Button";

function Calculator() {
  return (
    <div className="Calculator">
      <input type="number" id="display" />
      <div className="buttonContainer">
        <Button id="clear" label="C" />
        <Button id="divide" label="/" />
        <Button id="multiply" label="x" />
        <Button id="seven" label="7" />
        <Button id="eight" label="8" />
        <Button id="nine" label="9" />
        <Button id="subtract" label="-" />
        <Button id="four" label="4" />
        <Button id="five" label="5" />
        <Button id="six" label="6" />
        <Button id="add" label="+" />
        <Button id="one" label="1" />
        <Button id="two" label="2" />
        <Button id="three" label="3" />
        <Button id="equals" label="=" />
        <Button id="zero" label="0" />
        <Button id="decimal" label="." />
      </div>
    </div>
  );
}

export default Calculator;
