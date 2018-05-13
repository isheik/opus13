import React from 'react';
import FavoriteContainer from '../containers/FavoriteContainer';
import RetweetContainer from '../containers/RetweetContainer';

const TweetFooter = props => (
  <div className="tweet-footer">
    <FavoriteContainer account={props.account} tweet={props.tweet} />
    <RetweetContainer account={props.account} tweet={props.tweet} />
  </div>
);

export default TweetFooter;
