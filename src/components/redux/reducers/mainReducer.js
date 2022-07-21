let initialState = {
  category: "all",
  currencySymbol: "$",
  currencyLabel: "USD",
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_CURRENCY":
      state.currencySymbol = action.payload.currencySymbol;
      state.currencyLabel = action.payload.currencyLabel;
      return state;
    case "SET_CATEGORY":
      state.category = action.payload.category;
      console.log(state);
      return state;
    default:
      return state;
  }
};

export default mainReducer;
