//if not familer with redux
//how we specify  the applications state changes and response to certain actions to out context

export default (state, action) => {
  switch (action.type) {
    case "DELETE_TRANSACTION":
      return {
        ...state,
        transactions: state.transactions.filter((transaction) => transaction.id !== action.payload),
      };
    default:
      return state;
  }
};
