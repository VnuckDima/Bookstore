import React, { useState } from "react";
import "./Books.scss";
import "../components/products/popup/Popup.scss";

import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

import { Link } from "react-router-dom";

import BooksItem from "../components/products/BooksItem";

import { useSelector, useDispatch } from "react-redux";
import {
  deleteBooksToCart,
  removeCartItem,
  plusItem,
  minusItem,
} from "../redux/actions/cart";
import Popup from "../components/products/popup/Popup";

function Books() {
  const dispatch = useDispatch();
  const { totalPrice, totalCount, items } = useSelector(({ cart }) => cart);

  const addedBooks = Object.keys(items).map((key) => {
    return items[key].items[0];
  });

  const [modalActive, setModalActive] = useState(false);
  const onDeleteCart = () => {
    dispatch(deleteBooksToCart());
    setModalActive(false);
  };

  const onRemoveItem = (id) => {
    dispatch(removeCartItem(id));
  };

  const onPlusItem = (id) => {
    dispatch(plusItem(id));
  };

  const onMinusItem = (id) => {
    dispatch(minusItem(id));
  };

  return (
    <div>
      {totalCount ? (
        <div className="basket-cont-center">
          <div className="basket-wrap-title">
            <div>
              <ShoppingCartIcon fontSize="large" style={{ color: "black" }} />
            </div>
            <div className="clear" onClick={() => setModalActive(true)}>
              <h1>Clear</h1>
            </div>
          </div>

          {addedBooks.map((obj) => (
            <BooksItem
              key={obj.id}
              name={obj.name}
              type={obj.types}
              totalPrice={items[obj.id].totalPrice}
              image={obj.imageUrl}
              desc={obj.desc}
              count={items[obj.id].items.length}
              id={obj.id}
              onRemove={onRemoveItem}
              minusItem={onMinusItem}
              plusItem={onPlusItem}
            />
          ))}

          <div className="basket-wrap-footer">
            <div>
              <p>
                Total: <span>{totalCount}</span> pc.
              </p>
            </div>
            <div>
              <p>
                Price: <span>{totalPrice}</span> $
              </p>
            </div>
          </div>
          <div className="basket-wrap-footer">
            <div className="btn">Back</div>
            <Link
              to="/completed"
              style={{ textDecoration: "none", color: "black" }}
            >
              <div className="btn" onClick={onDeleteCart}>
                Buy
              </div>
            </Link>
          </div>
          <Popup active={modalActive} setActive={setModalActive}>
            <div className="books-popup-clear">
              <p>Are you sure?</p>
              <div className="button-wrap">
                <div className="btn" onClick={onDeleteCart}>
                  Yes
                </div>
                <div className="btn" onClick={() => setModalActive(false)}>
                  No
                </div>
              </div>
            </div>
          </Popup>
        </div>
      ) : (
        <div className="basket-empty-wrap">
          <div className="basket-empty-title-img">
            <h2>Basket is empty, sorry...</h2>
            <div className="basket-empty-img"></div>
            <Link to="/" style={{ textDecoration: "none", color: "black" }}>
              <div className="basket-empty-add">Add Books</div>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default Books;
