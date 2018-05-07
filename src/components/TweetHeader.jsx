import React from 'react'

const TweetHeader = props => (
  <div>
    {props.userName}
    {props.tweetTime}
  </div>
);

export default TweetHeader;
