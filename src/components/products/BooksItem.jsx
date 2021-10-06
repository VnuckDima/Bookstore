import React, { useState } from "react";

import DeleteIcon from "@material-ui/icons/Delete";

import Popup from "../products/popup/Popup"

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
  plusItem,
}) {
  const [modalActive, setModalActive] = useState(false);

  const handleRemoveClick = () => {
    onRemove(id);
    setModalActive(false)
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
              <img className="image-basket" src={image} alt="book"/>
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
          <div onClick={() => setModalActive(true)}>
            <DeleteIcon
              fontSize="large"
              style={{ color: "black" }}
            />
          </div>
        </div>
      </div>
      <Popup active={modalActive} setActive={setModalActive}>
            <div className="books-popup-clear">
              <p>Are you sure?</p>
              <div className="button-wrap">
                <div className="btn" onClick={handleRemoveClick}>
                  Yes
                </div>
                <div className="btn" onClick={() => setModalActive(false)}>
                  No
                </div>
              </div>
            </div>
          </Popup>
    </div>
  );
}

export default BooksItem;
