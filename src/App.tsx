import React, {useState} from 'react';
import './App.css';
import Circle from "./Circle/Circle";

function App() {
  const [numbers, setNumbers] = useState([
    0, 0, 0, 0, 0
  ]);

  const changeNumber = () => {

    const arr:number[] = [];
    const randomNumber = () => {
      do {
        let number = Math.floor(Math.random() * (36 - 5 + 1)) + 5;
        if (arr.length === 0) {
          arr.push(number);
        }
        if (!arr.includes(number)){
          arr.push(number)
        }
        arr.sort(function(a, b){return a - b});
      } while (arr.length < 5)
      return arr
     };

    setNumbers(randomNumber);
  };

  return (
    <div className="App">
      <Circle number={numbers[0]}/>
      <Circle number={numbers[1]}/>
      <Circle number={numbers[2]}/>
      <Circle number={numbers[3]}/>
      <Circle number={numbers[4]}/>
      <button onClick={changeNumber}>New numbers</button>
    </div>
  );
}

export default App;