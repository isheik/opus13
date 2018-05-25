import React from 'react';
import FavoriteList from '../containers/FavoriteContainer';

const mapStateToProps = (state, props) => {
  let tweetData = (state.tweets && state.tweets[(props.account && props.account.user_id)]) || null;
  // let tweetData = state.tweets['2195738078'];
  // let tweetsa = (tweetData && tweetData[props.tab]) || [];
  let tweets = (tweetData && tweetData[props.tab]) || [];

  return {
    // tweets: (tweetData[props.tab] || []),
    tweets: tweets,
  };
};

export default connect(mapStateToProps)(FavoriteList);
