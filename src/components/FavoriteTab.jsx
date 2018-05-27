import React from 'react';
import TweetListContainer from '../containers/TweetListContainer';

const FavoriteTab = () => (
  <div>
    <TweetListContainer  {...props} account={props.accounts && props.accounts[props.activeAccountIndex]} tab="favorite" />
  </div>
);

export default FavoriteTab;