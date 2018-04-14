
export const tweets = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TWEET_TO_TAB':
      return [
        ...state,
        action.tweets,
        // {
        // tweets: action.tweets,
        // tab: action.tab,
        // }
      ];
    // return action.tweets;
    default:
      return state;
  }
};

export default tweets;
