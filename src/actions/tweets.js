export const addTweetToTab = (account, tab, tweet) => (
  {
    type: 'ADD_TWEET_TO_TAB',
    account,
    tab,
    tweet,
  }
);

