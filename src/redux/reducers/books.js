const initialState = {
  items: [],
  isLoaded: false,
};

const books = (state = initialState, action) => {
  switch (action.type) {
    case "SET_BOOKS":
      return {
        ...state,
        items: action.payload,
        isLoaded: true,
      };
    case "SET_LOADED":
      return {
        ...state,
        isLoaded: action.payload,
      };
    case "DELETE_BOOKS":
      return {
        ...state,
        items: state.items.filter((i) => i.id !== action.payload.id),
      };
    default:
      return state;
  }
};

export default books;
