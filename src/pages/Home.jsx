import React from "react";
import BooksBlock from "../components/products/BooksBlock";
import Products from "../components/products/Products";

import { useDispatch, useSelector } from "react-redux";

import LoadingBooks from "../components/products/LoadingBooks";

function Home() {
  const dispatch = useDispatch();
  const items = useSelector(({ books }) => books.items);
  const cartItems = useSelector(({ cart }) => cart.items);
  const isLoaded = useSelector(({ books }) => books.isLoaded);
  const handleAddBooksToCArt = (obj) => {
    dispatch({
      type: "ADD_BOOKS_CART",
      payload: obj,
    });
  };

  return (
    <div>
      <div>
        <Products />
      </div>
      <div className="cont-books">
        {isLoaded ? items.map((item) => 
              <BooksBlock
                onClickAddBook={handleAddBooksToCArt}
                key={item.id}
                cartCount={
                  cartItems[item.id] && cartItems[item.id].items.length
                }
                {...item}
              />
            )
          : Array(10)
              .fill(0)
              .map((_, index) => <LoadingBooks key={index} />)}
      </div>
    </div>
  );
}

export default Home;
