const updateLoadingState = isLoading => (
  {
    type: 'updateLoadingState',
    loading: isLoading,
  }
);

export default updateLoadingState;
