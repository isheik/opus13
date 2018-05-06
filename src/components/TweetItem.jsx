import React from 'react';
import FavoriteContainer from '../containers/FavoriteContainer';

const TweetItem = props => (
  <li>
    <img src={props.tweet.user.profile_image_url_https} alt="" />
    {props.tweet.text}
    <FavoriteContainer account={props.accounts[0]} tweet={props.tweet} />
  </li>
);

export default TweetItem;
