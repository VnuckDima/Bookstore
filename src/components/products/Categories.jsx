import React from "react";
import PropTypes from "prop-types";

const Categories = React.memo(function Categories({
  activeGenre,
  items,
  onClickGenre,
}) {
  return (
    <div className="cont-categories">
      <div
        onClick={() => onClickGenre(null)}
        className={activeGenre === null ? "active genre" : "genre"}
      >
        All
      </div>
      {items &&
        items.map((item, index) => (
          <div
            onClick={() => onClickGenre(index)}
            className={activeGenre === index ? "active genre" : "genre"}
            key={`${item}_${index}`}
          >
            {item}
          </div>
        ))}
    </div>
  );
});

Categories.propTypes = {
 /*  activeGenre: PropTypes.oneOf([PropTypes.number, null]), */
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  onClickGenre: PropTypes.func.isRequired,
};
export default Categories;
