import React, {useState} from 'react';
import './App.css';
import Circle from "./Circle/Circle";

function App() {
  const [numbers, setNumbers] = useState([
    {number: Math.floor(Math.random() * 32) + 5},
    {number: Math.floor(Math.random() * 32) + 5},
    {number: Math.floor(Math.random() * 32) + 5},
  ]);

  const changeNumber = () => {
    setNumbers([
      {number: Math.floor(Math.random() * 32) + 5},
      {number: Math.floor(Math.random() * 32) + 5},
      {number: Math.floor(Math.random() * 32) + 5},
    ]);
  };

  return (
    <div className="App">
      <Circle number={numbers[0].number}/>
      <Circle number={numbers[1].number}/>
      <Circle number={numbers[2].number}/>
      <button onClick={changeNumber}>start</button>
    </div>
  );
}

export default App;