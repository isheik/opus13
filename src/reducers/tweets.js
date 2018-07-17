
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
      return [...tweetSet.slice(0, i), tweet, ...tweetSet.slice(i + 1)];
    }
  }

  // Append if the given tweet was posted the earlier than others in set
  return [...tweetSet, tweet];
};

const deleteTweet = (tweetSet, tweet) => {
  const tweetSetLength = tweetSet.length;
  for (let i = 0; i < tweetSetLength; i++) {
    const result = tweetSet[i].id_str.localeCompare(tweet.id_str);
    if (result === 0) {
      // Just return the current set if the given tweet already exists
      // return [...tweetSet.slice(0, i), tweet, ...tweetSet.slice(i).slice(1)];
      return [...tweetSet.slice(0, i), ...tweetSet.slice(i + 1)];
    }
  }

  // Append if the given tweet was posted the earlier than others in set
  return [...tweetSet];
};

export const tweets = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_TWEET_TO_TAB':
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
    case 'DELETE_TWEET_FROM_TAB':
      return {
        ...state,
        [action.account.user_id]: {
          ...state[action.account.user_id],
          [action.tab]: deleteTweet(
            (state[action.account.user_id] && state[action.account.user_id][action.tab]) || [],
            action.tweet,
          ),
        },
      };
    case 'CLEAR_TWEETS_FROM_TAB':
      return {
        ...state,
        [action.account.user_id]: {
          ...state[action.account.user_id],
          [action.tab]: [],
        },
      };
    // return Object.assign(
    //   {},
    //   state,
    //   {
    //     [action.account.user_id]: (Object.assign(
    //       {},
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
    // NEXT: MAY18 TOGGLE this way?
    //  https://github.com/reduxjs/react-redux/issues/266
    default:
      return state;
  }
};

export default tweets;
