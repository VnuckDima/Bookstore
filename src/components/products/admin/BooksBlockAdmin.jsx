import React, { useState } from "react";

function BooksBlockAdmin({ id, name, imageUrl, price, alt, onDeleteAdmin }) {
  const handleDelBooks = () => {
    onDeleteAdmin();
    
  };
  return (
    <div>
      <div className="cart-books">
        <div className="image-books books-wrap">
          <img className="img-size" src={imageUrl} alt={alt} />
        </div>

        <div className="name-books books-wrap">{name}</div>
        <div className="price-books books-wrap">{price} $</div>

        <div className="button-books books-wrap">
          <button className="button-add" onClick={handleDelBooks}>
            <span>Delete</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default BooksBlockAdmin;
