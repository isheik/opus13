const loading = (state = true, action) => {
  switch (action.type) {
    case 'UPDATE_LOADING_STATE':
      return action.isLoading;
    default:
      return state;
  }
};

export default loading;
