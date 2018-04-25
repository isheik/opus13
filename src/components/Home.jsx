import React from 'react';
// import TweetList from './TweetList';
import TweetListContainer from '../containers/TweetListContainer';

const Home = props => (
  <div>
    {console.log(props.accounts)}
    <TweetListContainer {...props} account={(props.accounts && props.accounts[props.activeAccountIndex])} tab="home" />
  </div>
);
// props.activeAccountIndex
// {console.log(props.activeAccountIndex)}
export default Home;
