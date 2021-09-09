import React, { useEffect, useState } from "react";
import "./App.scss";

import { Route } from "react-router-dom";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";

import Header from "./components/products/Header";
import { Home, Books } from "./pages";
import { setBooks } from "./redux/actions/books";

function App() {
  const dispatch = useDispatch();
  const { items } = useSelector(({ books, filter }) => {
    return {
      items: books.items,
      sortBy: filter.sortBy,
    };
  });

  useEffect(() => {
    axios.get("http://localhost:3000/db.json").then(({ data }) => {
      dispatch(setBooks(data.books));
    });
  }, []);

  return (
    <div>
      <div>
        <Header />
      </div>
      <div>
        <Route path="/" render={() => <Home items={items} />} exact />
        <Route path="/books" component={Books} exact />
      </div>
    </div>
  );
}

export default App;
