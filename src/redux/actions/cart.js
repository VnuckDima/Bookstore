export const addBooksToCart = (booksObj) => ({
  type: "ADD_BOOKS_CART",
  payload: booksObj,
});

export const deleteBooksToCart = () => ({
  type: "DELETE_BOOKS_CART",
});

export const removeCartItem = (id) => ({
  type: "REMOVE_CART_ITEM",
  payload: id,
});

export const plusItem = (id) => ({
  type: "PLUS_ITEM",
  payload: id,
});

export const minusItem = (id) => ({
  type: "MINUS_ITEM",
  payload: id,
});
