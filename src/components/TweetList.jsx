import React from 'react';
import TweetItem from './TweetItem';

const TweetList = props => (
  <div>
    {props.tweets.map(tweet => <TweetItem {...props} key={tweet.id_str} tweet={tweet} />)}
  </div>
);
// {console.log((props.tweets['home']))}
//2195738078
// {props.accounts.map(account => console.log(account))}
// {console.log(props.tweets)}
// {props.tweets.map(tweet => console.log(tweet))}
export default TweetList;
