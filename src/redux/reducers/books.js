const initialState = {
  items: [],
  isLoaded: false,
};

const books = (state = initialState, action) => {
  if (action.type === "SET_BOOKS") {
    return {
      ...state,
      items: action.payload,
      isLoaded: true,
    };
  }
  return state;
};

export default books;
