
const addTweet = (tweetSet, tweet) => {
  // Twitter response is a last come first serve basis (latest -> index 0)
  // TODO: Think about faster way.

  const tweetSetLength = tweetSet.length;
  for (let i = 0; i < tweetSetLength; i++) {
    const result = tweetSet[i].id_str.localeCompare(tweet.id_str);
    if (result === -1) {
      // Prepend if the given tweet was posted later than tweetSet[i]
      return [...tweetSet.slice(0, i), tweet, ...tweetSet.slice(i)];
    } else if (result === 0) {
      // Just return the current set if the given tweet already exists
      // return [...tweetSet.slice(0, i), tweet, ...tweetSet.slice(i).slice(1)];
      return [...tweetSet];
    }
  }

  // Append if the given tweet was posted the earlier than others in set
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
      // return Object.assign(
      // {},
      return {
        ...state,
        [action.account.user_id]: {
          ...state[action.account.user_id],
          [action.tab]: addTweet(
            (state[action.account.user_id] && state[action.account.user_id][action.tab]) || [],
            action.tweet,
          ),
        },
      };
    // );

    // return Object.assign(
    //   {},
    //   state,
    //   {
    //     [state[action.account.user_id]]: (Object.assign(
    //       state[action.account.user_id],
    //       {
    //         [action.tab]: addTweet(
    //           (state[action.account.user_id] && state[action.account.user_id][action.tab]) || [],
    //           action.tweet,
    //         ),
    //       },
    //     )),
    //   },
    // );

    // [state[action.account.user_id]]: state.action.account.user_id,


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
