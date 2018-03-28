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

export const changeActiveAccount = account => (
  {
    type: 'CHANGE_ACTIVE_ACCOUNT',
    account,
  }
);
