import React from 'react';
import FavoriteContainer from '../containers/FavoriteContainer';
import RetweetContainer from '../containers/RetweetContainer';
import Reply from '../components/Reply';

const TweetFooter = props => (
  <div className="tweet-footer">
    <Reply />
    <FavoriteContainer account={props.account} tweet={props.tweet} />
    <RetweetContainer account={props.account} tweet={props.tweet} />
  </div>
);

export default TweetFooter;
