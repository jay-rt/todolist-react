import React, { useState } from "react";

const InputArea = (props) => {
  const [item, setItem] = useState("");

  const handleChange = (event) => {
    setItem(event.target.value);
  };

  return (
    <div className="form">
      <input type="text" onChange={handleChange} value={item} />
      <button
        onClick={() => {
          props.onAdd(item);
          setItem("");
        }}
      >
        <span>Add</span>
      </button>
    </div>
  );
};

export default InputArea;
