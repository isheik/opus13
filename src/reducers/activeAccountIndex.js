const activeAccountIndex = (state = 0, action) => {
  switch (action.type) {
    case 'CHANGE_ACTIVE_ACCOUNT':
      return action.index;
    default:
      return state;
  }
};

export default activeAccountIndex;
