import React from 'react';
import TweetListContainer from '../containers/TweetListContainer';

const MentionedTab = props => (
  <div className="tweet-list-wrapper">
    <TweetListContainer {...props} account={props.accounts && props.accounts[props.activeAccountIndex]} tab="mentioned" />
  </div>
);

export default MentionedTab;

// JUN9 Change UI
