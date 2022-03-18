import React from "react";

function CategoryFilter({ categories, selectedCategory, onSelectCategory }) {
  const categoryButtons = categories.map((category) => {
    const className = category === selectedCategory ? "selected" : null;
    return (
      <button
        key={category}
        className={className}
        onClick={() => onSelectCategory(category)}
      >
        {category}
      </button>
    );
  });

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categoryButtons}
    </div>
  );
}

export default CategoryFilter;




















// import React from "react";

// function CategoryFilter({category, selectedCat, disSelect}) {


// const catButton = category.map((cat) => {
//   const classN = cat === selectedCat ? "seleced" : null ;
// return (<button
// key={cat}
// className ={classN}
// onClick={() => disSelect(cat)}
// >{cat}</button>
// )
// })


//   return (
//     <div className="categories">
//       <h5>Category filters</h5>
//       {catButton}
//     </div>
//   );
// }

// export default CategoryFilter;
