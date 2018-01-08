import React from 'react';
import TweetList from './TweetList';

const Home = props => (
  <div>
    <TweetList {...props} />
  </div>
);

export default Home;