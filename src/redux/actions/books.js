import axios from "axios";

export const deleteBooks = (id) => (dispatch) => {
  axios.delete(
    `https://my-json-server.typicode.com/DimaVnuk/db-bookstore/books/?id=${id}`,
    {
      method: "DELETE",
    }
  );

  dispatch({
    type: "DELETE_BOOKS",
    payload: id,
  });
};

export const setLoaded = (payload) => ({
  type: "SET_LOADED",
  payload,
});

export const getBooks = (sortBy, category) => (dispatch) => {
  dispatch({
    payload: false,
    type: "SET_LOADED",
  });
  axios
    .get(
      `https://my-json-server.typicode.com/DimaVnuk/db-bookstore/books/?${
        category !== null ? `category=${category}` : ""
      }&_sort=${sortBy.type}&_order=${sortBy.order}`
    )
    .then(({ data }) => {
      dispatch(setBooks(data));
    });
};

export const setBooks = (items) => ({
  type: "SET_BOOKS",
  payload: items,
});

export const delBooks = (id) => ({
  type: "DELETE_BOOKS",
  payload: id,
});
