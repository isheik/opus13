
const addTweet = (tweetSet, tweet) => {
  // TODO: Disallow to put duplicated tweets.
  return [...tweetSet, tweet];
};

export const tweets = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_TWEET_TO_TAB':
      // return [...state, {
      //   account: action.account,
      //   tab: action.tab,
      //   tweet: action.tweet,
      // }];
      return Object.assign(
        {},
        state,
        {
          [action.account.user_id]: {
            [action.tab]: addTweet(
              (state[action.account.user_id] && state[action.account.user_id][action.tab]) || [],
              action.tweet,
            ),
          }
        },
      );

    // [state[action.account.user_id]]: state[action.account.user_id],
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
