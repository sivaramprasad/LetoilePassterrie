"use client";

import { useState } from "react";

const CategoryItem = ({ category }) => {
  const [selected, setSelected] = useState(false);
  return (
    <button
      className={`${
        selected && "text-blue"
      } group flex items-center justify-between ease-out duration-200 hover:text-blue `}
      onClick={() => setSelected(!selected)}
    >
      <div className="flex items-center gap-2">
      

        <span>{category.name}</span>
      </div>

      <span
        className={`${
          selected ? "text-white bg-blue" : "bg-gray-2"
        } inline-flex rounded-[30px] text-custom-xs px-2 ease-out duration-200 group-hover:text-white group-hover:bg-blue`}
      >
        {category.products}
      </span>
    </button>
  );
};

const CategoryDropdown = ({ categories }) => {
  const [toggleDropdown, setToggleDropdown] = useState(true);

  return (
    <div className="bg-white shadow-1 rounded-lg padding-20">
       <h1 className="font-semibold text-dark text-xl sm:text-2xl xl:text-custom-2">Cakes</h1>
       <div>
         
      {categories.map((category, index) => (
        <div key={index}>
         
          {category.heading ? (
            // Render as section heading
            <h3 className="font-bold text-lg mt-4 mb-2">{category.heading}</h3>
          ) : (
            // Render as normal category
            <div className="flex justify-between py-1">
              <span>{category.name}</span>
            </div>
          )}
        </div>
      ))}
    </div>
     
    </div>
  );
};

export default CategoryDropdown;
