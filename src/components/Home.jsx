import React from 'react';
// import TweetList from './TweetList';
import TweetListContainer from '../containers/TweetListContainer';

const Home = props => (
  <div>
    <TweetListContainer {...props} tab="home" />
  </div>
);

export default Home;
