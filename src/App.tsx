import React from 'react';
import './App.css';
import Circle from "./Circle/Circle";

function App() {
  return (
    <div className="App">
      <Circle number={Math.floor(Math.random() * 32) + 5}/>
      <Circle number={Math.floor(Math.random() * 32) + 5}/>
      <Circle number={Math.floor(Math.random() * 32) + 5}/>
    </div>
  );
}

export default App;