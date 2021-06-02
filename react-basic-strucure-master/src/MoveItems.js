import React from "react";
import BoxOneItems from "./BoxOneItems";

const MoveItems = ({
  boxOneItems,
  boxTwoItems,
  setBoxOneItems,
  setBoxTwoItems,
  temp,
  setTemp
}) => {
  const leftIteminBoxOne = boxOneItems.filter((item) => !temp.includes(item));
  const leftIteminBoxTwo = boxTwoItems.filter((item) => !temp.includes(item));

  const setItemsInBoxtwo = () => {
    setBoxTwoItems([...boxTwoItems, ...temp]);
    setBoxOneItems(leftIteminBoxOne);
    setTemp([])
  };
  const setItemsInBoxOne = () => {
    setBoxOneItems([...boxOneItems, ...temp]);
    setBoxTwoItems(leftIteminBoxTwo);
    setTemp([])
  };
  const removeItemsFromBoxOne = ()=> {

    setBoxTwoItems([...boxTwoItems,...boxOneItems])
    setBoxOneItems([])

  }

  const removeItemsFromBoxTwo = ()=> {

    setBoxOneItems([...boxTwoItems,...boxOneItems])
    setBoxTwoItems([])
       
  } 
  return (
    <div>
      <button onClick={setItemsInBoxtwo}>{">"}</button>
      <button onClick={setItemsInBoxOne}>{"<"}</button>
      <button onClick={removeItemsFromBoxOne}>{">>"}</button>
      <button onClick={removeItemsFromBoxTwo}>{"<<"}</button>
    </div>
  );
};

export default MoveItems;
