import React, { useState } from "react";
import Calculator from "./components/calculator/Calculator";
import InputField from "./components/input/Input";

const App: React.FC = () => {
  const [number, setNumber] = useState(0);

  return (
    <div className="App">
      <InputField send={setNumber} />
      <Calculator endNumber={number} />
    </div>
  );
};

export default App;
