import React from 'react';
import FavoriteContainer from '../containers/FavoriteContainer';
import Retweet from './Retweet';

const TweetFooter = props => (
  <div className="tweet-footer">
    <FavoriteContainer account={props.account} tweet={props.tweet} />
    <Retweet tweet={props.tweet} />
  </div>
);

export default TweetFooter;
