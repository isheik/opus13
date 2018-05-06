import React from 'react';
import FavoriteContainer from '../containers/FavoriteContainer';

const TweetItem = props => (
  <li>
    {props.tweet.text}
    <FavoriteContainer favorited={props.tweet.favorited} />
  </li>
);

export default TweetItem;
