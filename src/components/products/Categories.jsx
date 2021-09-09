import React, { useState } from "react";

function Categories({ items}) {
  const [activeGenre, setActiveGenre] = useState(null);

  const onSelectGenre = (index) => {
    setActiveGenre(index);
  };

  return (
    <div className="cont-categories">
      <div
        onClick={() => onSelectGenre(null)}
        className={activeGenre === null ? "active genre" : "genre"}
      >
        All
      </div>
      {items &&
        items.map((item, index) => (
          <div
            onClick={() => onSelectGenre(index)}
            className={activeGenre === index ? "active genre" : "genre"}
            key={`${item}_${index}`}
          >
            {item}
          </div>
        ))}
    </div>
  );
}

export default Categories;
