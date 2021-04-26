import React from "react";
import "./Calculator.css";

export interface CalculatorProps {
  endNumber: number;
}

const Calculator: React.FC<CalculatorProps> = ({ endNumber }) => {
  const result: JSX.Element[] = [];

  for (let i: number = 1; i < endNumber + 1; i++) {
    let text: string = "";

    if (i % 3 === 0) {
      text = "Fizz";
    }
    if (i % 5 === 0) {
      text += "Buzz";
    }

    result.push(
      <div key={i}>
        <p className="number">{text || i}</p>
      </div>
    );
  }

  return (
    <div id="calculator-area">
      <div id="list-area">{result}</div>
    </div>
  );
};

export default Calculator;
