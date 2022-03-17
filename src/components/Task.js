import React from "react";


function Task({ text, category, handleDelete, index }) {

  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button onClick={()=>handleDelete(index)} className="delete">X</button>
    </div>
  );
}

export default Task;
