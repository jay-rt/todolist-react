import React from "react";

const ToDoItem = (props) => {
  return (
    <li
      onClick={() => {
        props.onChecked(props.id);
      }}
    >
      {props.item}
    </li>
  );
};

export default ToDoItem;
