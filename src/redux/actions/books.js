import axios from "axios";

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
      `books?${
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
