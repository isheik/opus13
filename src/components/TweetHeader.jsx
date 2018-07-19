import React from 'react';
import moment from 'moment';

// TODO: Fix time format do this next July 18
// TODO: Put some margin between elements
const TweetHeader = props => (
  <div>
    <span className="header-username">{props.userName}</span>
    <span className="header-time">{moment(props.tweetTime).format('h:mm:ss a - DD MMM YYYY')}</span>
  </div>
);

export default TweetHeader;
