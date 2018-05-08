import React from 'react';
import FavoriteContainer from '../containers/FavoriteContainer';
import ProfileImage from '../components/ProfileImage';
import TweetHeader from '../components/TweetHeader';

const TweetItem = props => (
  <li className="tweet-item">
    <div className="left-div">
      <ProfileImage profileImg={props.tweet.user.profile_image_url_https} />
    </div>
    <div className="right-div">
      <TweetHeader userName={props.tweet.user.name} tweetTime={props.tweet.created_at} />
      <p>{props.tweet.text}</p>
      <FavoriteContainer account={props.accounts[0]} tweet={props.tweet} />
    </div>
  </li>
);

// <img src={props.tweet.user.profile_image_url_https} alt="" />
export default TweetItem;
