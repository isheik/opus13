import React from 'react';
import TweetListContainer from '../containers/TweetListContainer';

const MentionedTab = props => (
  <div>
    <TweetListContainer {...props} account={props.accounts && props.accounts[props.activeAccountIndex]} tab="favorite" />
  </div>
);

export default MentionedTab;

// NEXT: JUN8 make menu click eventain Appcon
