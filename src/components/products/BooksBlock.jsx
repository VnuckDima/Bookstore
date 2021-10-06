import React, { useState } from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import GaugeChart from "react-gauge-chart";

function BooksBlock({
  id,
  desc,
  name,
  imageUrl,
  price,
  types,
  alt,
  popular,
  onClickAddBook,
  cartCount
}) {
  const [activeType, setActiveType] = useState(types[0]);
  const typeNames = ["Trial", "Full"];

  const onSelectType = (index) => {
    setActiveType(index);
  };

  const chartStyle = {
    height: 100,
    width: 200,
  };

  const handleAddBooks = () => {
    const obj = {
      id,
      name,
      imageUrl,
      price,
      desc,
      types: typeNames[activeType]
    }
    onClickAddBook(obj);
  };

  return (
    <div>
      <div className="cart-books">
        <div className="image-books books-wrap">
          <img className="img-size" src={imageUrl} alt={alt} />
        </div>

        <GaugeChart
          className="gauge"
          style={chartStyle}
          id="gauge-chart1"
          arcPadding={0.1}
          colors={["#EA4228", "#F5CD19", "#5BE12C"]}
          percent={popular / 10}
          cornerRadius={popular}
          textColor={"#ffcc34"}
          formatTextValue={(value) => value + ""}
          fontSize={"30px"}
        />

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
          <button className="button-add" onClick={handleAddBooks}>
            <span>Add </span>{cartCount && <span className="cart-count">{cartCount}</span>}
          </button>
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
  onAddBook: PropTypes.func,
  cartCount: PropTypes.number
};

export default BooksBlock;
