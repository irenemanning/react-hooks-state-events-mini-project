import React from "react";

function CategoryFilter( { selectedCategory, setSelectedCategory, categories } ) {
  console.log(selectedCategory)
  const catButtons = categories.map(category=>{
    return (
      <button
      onClick={()=>setSelectedCategory(category)}
      className={selectedCategory===category? "selected" : null}
      key={category}
      >{category}</button>
    )
  })
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {catButtons}
    </div>
  );
}

export default CategoryFilter;
