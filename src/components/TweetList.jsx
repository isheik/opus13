import React from 'react';
import TweetItem from './TweetItem';

const TweetList = props => (
  <div>
    {props.tweets.map(tweet => <TweetItem {...props} key={tweet.id_str} tweet={tweet} />)}
  </div>
);

export default TweetList;
