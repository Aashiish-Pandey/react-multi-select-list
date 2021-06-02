import React from "react";

const ListItems = ({ item, temp, setTemp }) => {
  return <li onClick={()=>setTemp([...temp, item])}>{item}</li>;
};

export default ListItems;
