import React, { useState } from "react";
import "./Calculator.css";
import Button from "./components/Button";

function Calculator() {
  const [output, setOutput] = useState("");

  function handleClick(label) {
    setOutput((prevState) => prevState + label);
  }

  return (
    <div className="calculator">
      <div id="display">{output}</div>
      <div className="buttonContainer">
        <Button id="clear" label="C" onClick={() => setOutput("")} />
        <Button id="divide" label="/" />
        <Button id="multiply" label="x" />
        <Button id="seven" label="7" onClick={handleClick} />
        <Button id="eight" label="8" onClick={handleClick} />
        <Button id="nine" label="9" onClick={handleClick} />
        <Button id="subtract" label="-" />
        <Button id="four" label="4" onClick={handleClick} />
        <Button id="five" label="5" onClick={handleClick} />
        <Button id="six" label="6" onClick={handleClick} />
        <Button id="add" label="+" />
        <Button id="one" label="1" onClick={handleClick} />
        <Button id="two" label="2" onClick={handleClick} />
        <Button id="three" label="3" onClick={handleClick} />
        <Button id="equals" label="=" />
        <Button id="zero" label="0" onClick={handleClick} />
        <Button id="decimal" label="." />
      </div>
    </div>
  );
}

export default Calculator;
