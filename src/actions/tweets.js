export const loadHome = account => (
  {
    type: 'LOAD_HOME',
  }
);

export const addTweetToTab = (tweets, tab) => (
  {
    type: 'ADD_TWEET_TO_TAB',
    tweets,
    tab,
  }
);

export default loadHome;
