import React from 'react';
import TweetItem from './TweetItem';

const TweetList = props => (
  <div>
    {console.log(props.tweets)}
  </div>
);
// {props.tweets.map(tweet => <TweetItem {...props} key={tweet.id_str} tweet={tweet} />)}

// {props.accounts.map(account => console.log(account))}
// {console.log(props.tweets)}
// {props.tweets.map(tweet => console.log(tweet))}
export default TweetList;
