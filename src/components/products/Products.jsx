import React from "react";
import Categories from "./Categories";
import Sort from "./Sort";
import "./Products.scss";

function Products() {
  return (
    <div>
      <Categories
        onClickGenre={(item) => console.log(item)}
        items={["Horror", "Thrillers", "Romance", "Graphic Novel", "Classics"]}
      />

      <Sort
        items={[
          { name: "Alphabet", type: "alphabet" },
          { name: "Date", type: "date" },
          { name: "Popular", type: "popular" },
          { name: "Price", type: "price" },
        ]}
      />
    </div>
  );
}

export default Products;
