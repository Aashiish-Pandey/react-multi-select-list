import "./App.css";
import BoxOneItems from "./BoxOneItems";
import BoxTwoItems from "./BoxTwoItems";
import React, { useState } from "react";
import MoveItems from "./MoveItems";
function App() {
  const [boxOneItems, setBoxOneItems] = useState([
    "mango",
    "papaya",
    "apple",
    "orange",
    "banana",
    "grape",
    "pineapple",
  ]);

  const [boxTwoItems, setBoxTwoItems] = useState([
    "potato",
    "tomato",
    "pea",
    "ginger",
    "chilli",
    "pea",
    "garlic",
    "onion",
  ]);

  const [temp, setTemp] = useState([]);
  return (
    <div className="App">
      <BoxOneItems boxOneItems={boxOneItems} temp={temp} setTemp={setTemp} />

      <MoveItems
        boxOneItems={boxOneItems}
        boxTwoItems={boxTwoItems}
        setBoxOneItems={setBoxOneItems}
        setBoxTwoItems={setBoxTwoItems}
        temp ={temp}
        setTemp ={setTemp}
      />
      <BoxTwoItems boxTwoItems={boxTwoItems} temp={temp} setTemp={setTemp} />
    </div>
  );
}

export default App;
