import React from 'react';
import TweetListContainer from '../containers/TweetListContainer';
import SearchBar from './SearchBar';

const SearchTab = props => (
  <div>
    <SearchBarContainer {...props} />
    <TweetListContainer {...props} account={props.accounts && props.accounts[props.activeAccountIndex]} tab="search" />
  </div>
);

export default SearchTab;
