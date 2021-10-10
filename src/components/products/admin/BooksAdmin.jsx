import React from "react";
import BooksBlockAdmin from "./BooksBlockAdmin";
import Products from "../../products/Products";

import { useDispatch, useSelector } from "react-redux";

import { deleteCartAdmin } from "../../../redux/actions/cart";

function BooksAdmin() {
  const dispatch = useDispatch();
  const items = useSelector(({ books }) => books.items);
  

  const onRemoveItem = () => {
    dispatch(deleteCartAdmin());
  };

  return (
    <div>
      <div>
        <Products />
      </div>
      <div className="cont-books">
        {items.map((item) => (
          <BooksBlockAdmin
            onDeleteAdmin={onRemoveItem}
            key={item.id}
            {...item}
          />
        ))}
      </div>
    </div>
  );
}

export default BooksAdmin;
