import React, { useState } from "react";

function NewTaskForm({ handleTaskFormSubmit }) {
  const [category, setCategory] = useState()
  const [details, setDetails] = useState()
  function handleDetails(e) {
    console.log(e.target.value)
    setDetails(e.target.value)
  }
  function handleCategory(e) {
    setCategory(e.target.value)
  }
  function handleAddTask(e) {
    e.preventDefault()
    const newTask = {
      text: details,
      category: category,
    }
    handleTaskFormSubmit(newTask)

  }
  return (
    <form onSubmit={handleAddTask} className="new-task-form">
      <label>
        Details
        <input onChange={handleDetails} type="text" name="text" />
      </label>
      <label>
        Category
        <select onChange={handleCategory} name="category">
          {/* render <option> elements for each category here */}
          <option>Code</option>
          <option>Food</option>
          <option>Money</option>
          <option>Misc</option>
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
