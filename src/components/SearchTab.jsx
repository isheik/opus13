import React from 'react';
import TweetListContainer from '../containers/TweetListContainer';
import SearchBarContainer from '../containers/SearchBarContainer';

const SearchTab = props => (
  <div>
    <SearchBarContainer {...props} />
    <TweetListContainer {...props} account={props.accounts && props.accounts[props.activeAccountIndex]} tab="search" />
  </div>
);

export default SearchTab;
