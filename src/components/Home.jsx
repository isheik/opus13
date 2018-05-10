import React from 'react';
// import TweetList from './TweetList';
import EditorContainer from '../containers/EditorContainer';
import TweetListContainer from '../containers/TweetListContainer';
import User from './User';

const Home = props => (
  <div>
    <div className="left-div">
      <User account={props.accounts && props.accounts[props.activeAccountIndex]} />
    </div>
    <div className="right-div">
      <EditorContainer {...props} account={props.accounts && props.accounts[props.activeAccountIndex]} />
    </div>
    <TweetListContainer {...props} account={props.accounts && props.accounts[props.activeAccountIndex]} tab="home" />
  </div>
);
// <TweetListContainer {...props} accounts={props.accounts} tab="home" />
// <TweetListContainer {...props} account={(props.accounts && props.accounts[props.activeAccountIndex])} tab="home" />
// props.activeAccountIndex
// {console.log(props.activeAccountIndex)}
export default Home;
