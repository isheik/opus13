import React from 'react';
import FavoriteContainer from '../containers/FavoriteContainer';
import ProfileImage from '../components/ProfileImage';

const TweetItem = props => (
  <li className="tweet-item">
    <div class="left-div">
      <ProfileImage profileImg={props.tweet.user.profile_image_url_https} />
    </div>
    <div class="right-div">
      {props.tweet.user.name}
      {props.tweet.text}
      <FavoriteContainer account={props.accounts[0]} tweet={props.tweet} />
    </div>
  </li>
);

// <img src={props.tweet.user.profile_image_url_https} alt="" />
export default TweetItem;
