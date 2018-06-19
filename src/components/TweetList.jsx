import React from 'react';
import TweetItem from './TweetItem';

const TweetList = props => (
  <div className="tweet-list-container">
    <ul className="tweet-list">
      {props.tweets.map(tweet => <TweetItem {...props} key={tweet.id_str} tweet={tweet} />)}
    </ul>
  </div>
);

export default TweetList;
