let initialState = {
  category: "all",
  currencySymbol: "$",
  currencyLabel: "USD",
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
    default:
      return state;
  }
};

export default mainReducer;
