import React from 'react';
// import TweetList from './TweetList';
import TweetListContainer from '../containers/TweetListContainer';

const Home = props => (
  <div>
    {console.log(props.activeAccountIndex)}
    <TweetListContainer {...props} account={props.accounts['0']} tab="home" />
  </div>
);
// props.activeAccountIndex
export default Home;
