import React from 'react';
import User from './User';
import EditorContainer from '../containers/EditorContainer';

const Header = props => (
  <div className="header">
    <div className="user-field">
      <div className="left-div">
        <User account={props.accounts && props.accounts[props.activeAccountIndex]} />
      </div>
      <div className="right-div">
        <EditorContainer {...props} account={props.accounts && props.accounts[props.activeAccountIndex]} />
      </div>
    </div>
    <hr />
  </div>
);

export default Header;
