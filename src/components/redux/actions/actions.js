export const setCurrency = (symbol, label) => {
  return {
    type: "SET_CURRENCY",
    payload: {
      currencySymbol: symbol,
      currencyLabel: label,
    },
  };
};

export const setCategory = (category) => {
  return {
    type: "SET_CATEGORY",
    payload: {
      category: category,
    },
  };
};
