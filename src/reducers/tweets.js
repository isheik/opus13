
export const tweets = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TWEET_TO_TAB':
      return [
        ...state,
        {
          tweets: action.tweets,
          tab: action.tab,
        }
      ];
    default:
      return state;
  }
};
