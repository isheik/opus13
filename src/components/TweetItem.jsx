import React from 'react';
import FavoriteContainer from '../containers/FavoriteContainer';

const TweetItem = props => (
  <li>
    {props.tweet.text}
    <FavoriteContainer account={props.accounts[0]} favorited={props.tweet.favorited} />
  </li>
);

export default TweetItem;
