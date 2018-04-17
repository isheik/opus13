
export const tweets = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TWEET_TO_TAB':
      return Object.assign(
        {},
        state,
        {
          [action.tweet.id_str]: {
            account: action.account,
            tab: action.tab,
            tweet: action.tweet,
          },
        });
    // {
    // tweets: action.tweets,
    // tab: action.tab,
    // }
    // return action.tweets;
    default:
      return state;
  }
};

export default tweets;
