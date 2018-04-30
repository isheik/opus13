import React from 'react';
import { connect } from 'react-redux';
import Editor from '../components/Editor';

const mapStateToProps = () => (
  {}
);

const mapDispatchToProps = () => (
  {
    handleKeyPress: (event) => {
      console.log(event.key);
    },
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(Editor);
