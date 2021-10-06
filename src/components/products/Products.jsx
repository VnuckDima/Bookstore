import React from "react";
import Categories from "./Categories";
import Sort from "./Sort";
import "./Products.scss";

import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import { setCategory,setSortBy } from "../../redux/actions/filter";
import { getBooks } from "../../redux/actions/books";

const categoriesName = [
  "Horror",
  "Thrillers",
  "Romance",
  "Graphic Novel",
  "Classics",
];
const sortBooks = [
  { name: "Alphabet", type: "name" , order: 'asc'},
  { name: "Date", type: "date" , order: 'desc'},
  { name: "Popular", type: "popular", order: 'desc'},
  { name: "Price", type: "price" , order: 'desc'},
];

function Products() {
  const dispatch = useDispatch();
  const { category, sortBy } = useSelector(({ filter }) => filter);

  React.useEffect(() => {
    dispatch(getBooks(sortBy,category));
  }, [category, sortBy, dispatch]);

  const onSelectCategory = React.useCallback((index) => {
    dispatch(setCategory(index));
  }, [dispatch]);

  const onSelectSort = React.useCallback((type) => {
    dispatch(setSortBy(type));
  }, [dispatch]);

  
  return (
    <div>
      <Categories
        activeGenre={category}
        onClickGenre={onSelectCategory}
        items={categoriesName}
      />

      <Sort activeSortType={sortBy.type} items={sortBooks} sortType={onSelectSort}/>
    </div>
  );
}

export default Products;
