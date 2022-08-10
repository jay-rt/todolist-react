import React, { useState } from "react";
import ToDoItem from "./ToDoItem";

const App = () => {
  const [item, setItem] = useState("");
  const [list, setList] = useState([]);

  const handleChange = (event) => {
    setItem(event.target.value);
  };

  const handleClick = () => {
    setList((prevList) => {
      return [...prevList, item];
    });
    setItem("");
  };

  const deleteItem = (id) => {
    setList((prevList) => {
      return prevList.filter((listItem, index) => {
        return index !== id;
      });
    });
  };

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" onChange={handleChange} value={item} />
        <button onClick={handleClick}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {list.map((listItem, index) => (
            <ToDoItem
              key={index}
              id={index}
              item={listItem}
              onChecked={deleteItem}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
