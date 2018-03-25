export const addAccount = account => (
  {
    type: 'ADD_ACCOUNT',
    account,
  }
);

export const deleteAccount = () => (
  {
    type: 'DELETE_ACCOUNT',
  }
);
