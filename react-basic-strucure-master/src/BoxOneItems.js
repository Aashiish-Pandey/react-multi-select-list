import React from "react";
import ListItems from "./ListItems";

const BoxOneItems = ({ boxOneItems ,temp,setTemp}) => {
  return (
    <ul>
      {boxOneItems.map((item) => (
        <ListItems item={item} temp ={temp} setTemp={setTemp}/>
      ))}
    </ul>
  );
};

export default BoxOneItems;
