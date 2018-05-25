import React from 'react';
import TweetListContainer from '../containers/TweetListContainer';

const FavoriteList = () => (
  <div>
    <TweetListContainer  {...props} account={props.accounts && props.accounts[props.activeAccountIndex]} tab="favorite" />
  </div>
);

export default FavoriteList;
