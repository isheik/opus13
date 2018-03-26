import React from 'react';
import TweetItem from './TweetItem';

const TweetList = props => (
  <div>
    {props.tweets.map(tweet => <TweetItem {...props} key={tweet.id_str} tweet={tweet} />)}
    {props.accounts.map(account => console.log(account))}
  </div>
);

export default TweetList;
