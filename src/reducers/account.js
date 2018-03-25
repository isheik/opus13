const account = (state = [], action) => {
  switch (action.type) {
    case 'ADD_ACCOUNT':
      return [
        ...state,
        action.account,
      ];
    default:
      return state;
  }
};

export default account;
