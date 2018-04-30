import React from 'react';

const TweetItem = props => (
  <li>
    {props.tweet.text}
  </li>
);

export default TweetItem;
