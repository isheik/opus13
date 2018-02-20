import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import App from '../components/App';
import Actions from '../actions/AppActions';

import Authentication from '../utils/authentication';

const mapStateToProps = state => (
  { tweets: state.tweets }
);

const authtest = () => {
  // Authentication.generateSignature();
  Authentication.getRequrestToken();
};

authtest();

const mapDispatchToProps = dispatch => (
  {
    handleTodoAdd(value) {
      dispatch(Actions.addTodo(value));
    },
  }
);

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));

