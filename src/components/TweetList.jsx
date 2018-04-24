import React from 'react';
import TweetItem from './TweetItem';

const TweetList = props => (
  <div>
    {console.log(props.tweets)}
  </div>
);
// {props.tweets['home'].map(tweetObj => <TweetItem {...props} key={tweetObj.tweet.id_str} tweet={tweetObj.tweet} />)}
// {console.log((props.tweets['home']))}
//2195738078
// {props.accounts.map(account => console.log(account))}
// {console.log(props.tweets)}
// {props.tweets.map(tweet => console.log(tweet))}
export default TweetList;
