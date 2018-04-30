import React from 'react';
import { connect } from 'react-redux';
import actions from '../actions/';
import Editor from '../components/Editor';

const mapStateToProps = (state, props) => (
  {
    accounts: props.accounts,
  }
);

const mapDispatchToProps = dispatch => (
  {
    handleKeyPress: (event) => {
      event.preventDefault();
    },
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(Editor);
