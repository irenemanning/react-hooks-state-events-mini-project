import React from "react";
import Task from "./Task";
function TaskList({ taskList, handleDelete }) {
  const tasks = taskList.map((task, index) => (
    <Task index={index} handleDelete={handleDelete} key={index} text={task.text} category={task.category} />
  ));
  return <div className="tasks">{tasks}</div>;
}

export default TaskList;
