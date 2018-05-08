import React from 'react'

// TODO: Fix time format
// TODO: Put some margin between elements
const TweetHeader = props => (
  <div>
    <span className="header-username">{props.userName}</span>
    <span>{props.tweetTime}</span>
  </div>
);

export default TweetHeader;
