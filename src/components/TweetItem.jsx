import React from 'react';
import TweetHeader from '../components/TweetHeader';
import TweetFooter from './TweetFooter';

const TweetItem = props => (
  <li className="tweet-item">
    <div className="left-div">
      <div>
        <img className="profile-img" src={props.tweet.user.profile_image_url_https} alt="" />
      </div>
    </div>
    <div className="right-div">
      <TweetHeader userName={props.tweet.user.name} tweetTime={props.tweet.created_at} />
      <p>{props.tweet.text}</p>
      <TweetFooter account={props.accounts[0]} tweet={props.tweet} />
    </div>
  </li>
);

// <ProfileImage profileImg={props.tweet.user.profile_image_url_https} />
// <img src={props.tweet.user.profile_image_url_https} alt="" />
export default TweetItem;
