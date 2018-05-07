import React from 'react'

const TweetHeader = props => (
  <div>
    <span>{props.userName}</span>
    <span>{props.tweetTime}</span>
  </div>
);

export default TweetHeader;
