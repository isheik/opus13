import React from 'react';
// import TweetList from './TweetList';
import EditorContainer from '../containers/EditorContainer';
import TweetListContainer from '../containers/TweetListContainer';

const Home = props => (
  <div>
    <EditorContainer {...props} account={props.accounts && props.accounts[props.activeAccountIndex]} />
    <TweetListContainer {...props} account={props.accounts && props.accounts[props.activeAccountIndex]} tab="home" />
  </div>
);
// <TweetListContainer {...props} accounts={props.accounts} tab="home" />
// <TweetListContainer {...props} account={(props.accounts && props.accounts[props.activeAccountIndex])} tab="home" />
// props.activeAccountIndex
// {console.log(props.activeAccountIndex)}
export default Home;
