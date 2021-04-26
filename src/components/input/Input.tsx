import React, { useState } from "react";
import "./Input.css";

export interface InputProps {
  send(number: number): void;
}

const InputField: React.FC<InputProps> = ({ send }) => {
  const [number, setNumber] = useState("");

  function onEnter() {
    send(parseInt(number, 10));
  }

  return (
    <div id="input-area">
      <input
        type="number"
        value={number}
        onChange={(e) => {
          setNumber(e.target.value);
        }}
        onKeyDown={(e) => e.key === "Enter" && onEnter()}
        id="number-input"
      />
      <button onClick={() => onEnter()} id="number-button">
        Button
      </button>
    </div>
  );
};

export default InputField;
