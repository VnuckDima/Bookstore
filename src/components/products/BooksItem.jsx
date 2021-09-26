import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";

function BooksItem({
  id,
  name,
  type,
  totalPrice,
  image,
  desc,
  count,
  onRemove,
  minusItem,
  plusItem
}) {
  const handleRemoveClick = () => {
    onRemove(id);
  };

  const handlePlus = () => {
    minusItem(id)
   
  }

  const handleMinus = () => {
    plusItem(id)
  }
  return (
    <div>
      <div className="basket-wrap">
        <div className="book-cont">
          <div className="book">
            <div className="image-book">
              <img className="image-basket" src={image} />
            </div>
            <div className="book-name">{name}</div>
            <div className="book-type">{type} Version</div>
          </div>
          <div className="">
            <div className="desc">{desc}</div>
          </div>
          <div className="count-book">
            <div onClick={handlePlus}>-</div>
            <div className="count-num">{count}</div>
            <div onClick={handleMinus}>+</div>
          </div>
          <div className="result-sum">{totalPrice}$</div>
          <div onClick={handleRemoveClick}>
            <DeleteIcon
              fontSize="large"
              style={{ color: "black" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BooksItem;
