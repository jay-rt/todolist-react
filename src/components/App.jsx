import React, { useState } from "react";
import ToDoItem from "./ToDoItem";
import InputArea from "./InputArea";

const App = () => {
  const [list, setList] = useState([]);

  const addItem = (item) => {
    setList((prevList) => {
      return [...prevList, item];
    });
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
      <InputArea onAdd={addItem} />
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
