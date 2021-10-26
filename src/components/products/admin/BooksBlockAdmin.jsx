import React from "react";

function BooksBlockAdmin({id, name, imageUrl, price, alt,deleBooks}) {
  
  return (
    <div>
      <div className="cart-books">
        <div className="image-books books-wrap">
          <img className="img-size" src={imageUrl} alt={alt} />
        </div>

        <div className="name-books books-wrap">{name}</div>
        <div className="price-books books-wrap">{price} $</div>

        <div className="button-books books-wrap" onClick={()=> deleBooks(id)}>
          <button className="button-add" >
            <span>Delete</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default BooksBlockAdmin;

