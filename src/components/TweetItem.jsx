import React from 'react';
import FavoriteContainer from '../containers/FavoriteContainer';
import ProfileImage from '../components/ProfileImage';

const TweetItem = props => (
  <li>
    <ProfileImage profileImg={props.tweet.user.profile_image_url_https} />
    {props.tweet.text}
    <FavoriteContainer account={props.accounts[0]} tweet={props.tweet} />
  </li>
);

// <img src={props.tweet.user.profile_image_url_https} alt="" />
export default TweetItem;
