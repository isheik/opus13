import React from 'react'

// TODO: Fix time format do this next July 18
// TODO: Put some margin between elements
const TweetHeader = props => (
  <div>
    <span className="header-username">{props.userName}</span>
    <span className="header-time">{props.tweetTime}</span>
  </div>
);

export default TweetHeader;
