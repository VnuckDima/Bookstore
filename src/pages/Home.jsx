import React from "react";
import BooksBlock from "../components/products/BooksBlock";
import Products from "../components/products/Products";

function Home({ items }) {
  return (
    <div>
      <div>
        <Products />
      </div>
      <div className="cont-books">
        {items && items.map((item) => (
          <BooksBlock
            key={item.id}
            {...item}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;
