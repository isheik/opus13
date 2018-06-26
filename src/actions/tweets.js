export const addTweetToTab = (account, tab, tweet) => (
  {
    type: 'ADD_TWEET_TO_TAB',
    account,
    tab,
    tweet,
  }
);

export const deleteTweetFromTab = (account, tab, tweet) => (
  {
    type: 'DELETE_TWEET_FROM_TAB',
    account,
    tab,
    tweet,
  }
);

export const clearTab = (account, tab) => (
  {
    type: 'DELETE_TWEET_FROM_TAB',
    account,
    tab,
  }
);

