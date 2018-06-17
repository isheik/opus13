import React from 'react';
import TweetListContainer from '../containers/TweetListContainer';

const SearchTab = props => (
  <div>
    <TweetListContainer {...props} account={props.accounts && props.accounts[props.activeAccountIndex]} tab="search" />
  </div>
);

export default SearchTab;
