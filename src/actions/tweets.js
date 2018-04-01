export const storeHomeTimeline = tweets => (
  {
    type: 'storeHomeTimeline',
    tweets,
  }
);

export const addTweetToTab = (tweets, tab) => (
  {
    type: 'ADD_TWEET_TO_TAB',
    tweets,
    tab,
  }
);

