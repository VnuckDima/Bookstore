import React, { useState } from "react";
import classNames from "classnames";
import PropTypes from "prop-types";

function BooksBlock({ name, imageUrl, price, types, alt }) {
  const [activeType, setActiveType] = useState(types[0]);
  const typeNames = ["Trial", "Full"];

  const onSelectType = (index) => {
    setActiveType(index);
  };

  return (
    <div>
      <div className="cart-books">
        <div className="image-books books-wrap">
          <img className="img-size" src={imageUrl} alt={alt} />
        </div>
        <div className="name-books books-wrap">{name}</div>
        <div className="price-books books-wrap">{price} $</div>
        <div className=" books-wrap type">
          {typeNames.map((item, index) => (
            <div
              key={item}
              onClick={() => onSelectType(index)}
              className={classNames({
                active: activeType === index,
                disabled: activeType !== index,
              })}
            >
              {item}
            </div>
          ))}
        </div>
        <div className="button-books books-wrap">
          <button className="button-add">Add</button>
        </div>
      </div>
    </div>
  );
}

BooksBlock.propTypes = {
  name: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  types: PropTypes.arrayOf(PropTypes.number).isRequired,
  alt: PropTypes.string.isRequired,
};

export default BooksBlock;
