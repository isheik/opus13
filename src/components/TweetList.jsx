import React from 'react';
import TweetItem from './TweetItem';

const TweetList = props => (
  <div>
    {props.tweets.map(tweet => <TweetItem {...props} key={tweet.id_str} tweet={tweet} />)}
    {props.accounts.map(account => console.log(account))}
    {console.log(props.tweets)}
    {props.tweets.map(tweet => console.log(tweet))}
  </div>
);

export default TweetList;
