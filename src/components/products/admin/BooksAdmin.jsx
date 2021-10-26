import React from "react";
import BooksBlockAdmin from "./BooksBlockAdmin";
import Products from "../../products/Products";
import {delBooks,deleteBooks} from "../../../redux/actions/books";
import { useSelector, useDispatch} from "react-redux";

function BooksAdmin() {
  const dispatch = useDispatch()

  const items = useSelector(({ books }) => books.items);
 

  const onRemoveItem = (id) => {
    dispatch(delBooks(id));
    console.log(dispatch(delBooks(id)))
  };

 

  return (
    <div>
      <div>
        <Products />
      </div>
      <div className="cont-books">
        {Array.from(items).map((item) => (
          <BooksBlockAdmin
            id={item.id}
            deleBooks={onRemoveItem}
            key={item.id}
            {...item}
          />
        ))}
      </div>
    </div>
  );
}

export default BooksAdmin;
