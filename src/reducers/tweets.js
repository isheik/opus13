
export const tweets = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TWEET_TO_TAB':
      return [...state, {
        account: action.account,
        tab: action.tab,
        tweet: action.tweet,
      }];
    //   return Object.assign(
    //     {},
    //     state,
    //     {
    //       [action.tweet.id_str]: {
    //         account: action.account,
    //         tab: action.tab,
    //         tweet: action.tweet,
    //       },
    //     });
    default:
      return state;
  }
};

export default tweets;
