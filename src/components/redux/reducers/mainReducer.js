let initialState = {
  category: "all",
  currencySymbol: "$",
  currencyLabel: "USD",
  cart: [],
  quantity: 0,
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_CURRENCY":
      return {
        ...state,
        currencySymbol: action.payload.currencySymbol,
        currencyLabel: action.payload.currencyLabel,
      };
    case "SET_CATEGORY":
      return {
        ...state,
        category: action.payload.category,
      };
    case "SET_CART_ITEM":
      return {
        ...state,
        cart: [...state.cart, action.payload.data],
        quantity: state.quantity + 1,
      };
    case "SET_ARRANGED_CART":
      return {
        ...state,
        arrangedCart: action.payload.data,
      };
    case "GET_CART":
      return state.cart;
    default:
      return state;
  }
};

export default mainReducer;
