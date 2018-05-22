import React from 'react';
import FavoriteContainer from '../containers/FavoriteContainer';
import RetweetContainer from '../containers/RetweetContainer';
import ReplyContainer from '../containers/ReplyContainer';

const TweetFooter = props => (
  <div className="tweet-footer">
    <ReplyContainer tweet={props.tweet} />
    <FavoriteContainer account={props.account} tweet={props.tweet} />
    <RetweetContainer account={props.account} tweet={props.tweet} />
  </div>
);

export default TweetFooter;
