import React from "react";
import ListItems from "./ListItems";

const BoxTwoItems = ({ boxTwoItems,temp,setTemp }) => {
  return (
    <ul>
      {boxTwoItems.map((item) => (
        <ListItems item={item} temp ={temp} setTemp={setTemp} />
      ))}
    </ul>
  );
};

export default BoxTwoItems;
