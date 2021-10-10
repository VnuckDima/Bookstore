const initialState = {
  items: {},
  totalPrice: 0,
  totalCount: 0,
};

const getTotalPrice = (arr) => arr.reduce((sum, obj) => obj.price + sum, 0);

const cart = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_BOOKS_CART": {
      const currentId = !state.items[action.payload.id]
        ? [action.payload]
        : [...state.items[action.payload.id].items, action.payload];

      const newItems = {
        ...state.items,
        [action.payload.id]: {
          items: currentId,
          totalPrice: getTotalPrice(currentId),
        },
      };
      const items = Object.values(newItems).map((obj) => obj.items);
      const allBooks = [].concat.apply([], items);
      const totalPrice = getTotalPrice(allBooks);

      return {
        ...state,
        items: newItems,
        totalCount: allBooks.length,
        totalPrice,
      };
    }
    case "DELETE_BOOKS_CART": {
      return {
        ...state,
        totalPrice: 0,
        totalCount: 0,
        items: {},
      };
    }

    case "PLUS_ITEM": {
      const newItemsBooksPlus = [
        ...state.items[action.payload].items,
        state.items[action.payload].items[0],
      ];

      const newItems = {
        ...state.items,
        [action.payload]: {
          items: newItemsBooksPlus,
          totalPrice: getTotalPrice(newItemsBooksPlus),
          totalCount: newItemsBooksPlus.length,
        },
      };

      return {
        ...state.items,
        items: newItems,
        totalPrice: getTotalPrice(newItemsBooksPlus),
        totalCount: newItemsBooksPlus.length,
      };
    }

    case "MINUS_ITEM": {
      const currentItems = state.items[action.payload].items;
      const newItemsBooksMinus =
        currentItems.length > 1
          ? state.items[action.payload].items.slice(1)
          : currentItems;

      const newItems = {
        ...state.items,
        [action.payload]: {
          items: newItemsBooksMinus,
          totalPrice: getTotalPrice(newItemsBooksMinus),
          totalCount: newItemsBooksMinus.length,
        },
      };

      return {
        ...state,
        items: newItems,
        totalPrice: getTotalPrice(newItemsBooksMinus),
        totalCount: newItemsBooksMinus.length,
      };
    }

    case "REMOVE_CART_ITEM": {
      const newItems = {
        ...state.items,
      };
      const currentTotalPrice = newItems[action.payload].totalPrice;
      const currentTotalCount = newItems[action.payload].items.length;
      delete newItems[action.payload];
      return {
        ...state,
        items: newItems,
        totalPrice: state.totalPrice - currentTotalPrice,
        totalCount: state.totalCount - currentTotalCount,
      };
    }

    case "DELETE_CART_ADMIN": {
      const newItems = {
        ...state.items,
      };
      delete newItems[action.payload];
      return {
        ...state,
        items: {},
      };
    }

    default:
      return state;
  }
};

export default cart;
