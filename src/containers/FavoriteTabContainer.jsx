import React from 'react';
import FavoriteTab from '../components/FavoriteTab';

const mapStateToProps = (state, props) => {
  let tweetData = (state.tweets && state.tweets[(props.account && props.account.user_id)]) || null;
  // let tweetData = state.tweets['2195738078'];
  // let tweetsa = (tweetData && tweetData[props.tab]) || [];
  let tweets = (tweetData && tweetData[props.tab]) || [];

  return {
    // tweets: (tweetData[props.tab] || []),
    // NEXT JUNE5 need to sort favorite tweet in descending order (Latest first)
    tweets: tweets,
  };
};

export default connect(mapStateToProps)(FavoriteTab);
