import React from 'react';
import TweetListContainer from '../containers/TweetListContainer';

const FavoriteTab = props => (
  <div className="tweet-list-wrapper">
    <TweetListContainer {...props} account={props.accounts && props.accounts[props.activeAccountIndex]} tab="favorite" />
  </div>
);

export default FavoriteTab;
