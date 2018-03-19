import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { ipcRenderer } from 'electron';


import App from '../components/App';
import Actions from '../actions/AppActions';

import FileManager from '../utils/FileManager';

const mapStateToProps = state => (
  { tweets: state.tweets }
);

// const authtest = () => {
// Authentication.generateSignature();
// ipcRenderer.send('twitter-auth-start');
// Authentication.authenticate();
// console.log("test3");
// };

// authtest();

const mapDispatchToProps = dispatch => (
  {
    handleTodoAdd(value) {
      dispatch(Actions.addTodo(value));
    },
    init: () => {
      ipcRenderer.send('twitter-auth-start');
    },
    subscribeIpcEvent: () => {
      ipcRenderer.on('twitter-auth-finish', () => {
        const accounts = FileManager.readProperty('.opus13');
        console.log(accounts);
      });
    },
  }
);

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));

