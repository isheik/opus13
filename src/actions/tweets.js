export const addTweetToTab = (account, tab, tweet) => (
  {
    type: 'ADD_TWEET_TO_TAB',
    account,
    tab,
    tweet,
  }
);

export const setInReplyTo = tweet => (
  {
    type: 'SET_IN_REPLY_TO',
    tweet,
  }
);
