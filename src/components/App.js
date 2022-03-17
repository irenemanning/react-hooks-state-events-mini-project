import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });


function App() {


  const [taskList, setTaskList] = useState(TASKS);
  const [selectedCategory, setSelectedCategory]= useState('All')
  function handleDelete(index) {
    setTaskList(taskList.filter((task, i)=>{
      return i !== index 
    }))
  }
  function filterTasks(){
    return taskList.filter((task)=>{
      if (selectedCategory === "All") {
        return true
      }
      return task.category === selectedCategory
    })
  }

  function handleTaskFormSubmit(newTask) {
    setTaskList([...taskList, newTask])
  }
  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} categories={CATEGORIES}/>
      <NewTaskForm handleTaskFormSubmit={handleTaskFormSubmit}/>
      <TaskList handleDelete={handleDelete} taskList={filterTasks()} />
    </div>
  );
}

export default App;
