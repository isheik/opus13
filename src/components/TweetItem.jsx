import React from 'react';
import FavoriteContainer from '../containers/FavoriteContainer';

const TweetItem = props => (
  <li>
    {props.tweet.text}
    <FavoriteContainer />
  </li>
);

export default TweetItem;
