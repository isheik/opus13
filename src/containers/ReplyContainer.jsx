import { connect } from 'react-redux';
import Twitter from 'twitter';
import Reply from '../components/Reply';
import Authentication from '../utils/Authentication';
import actions from '../actions';

const mapStateToProps = (state, props) => ({
  // favorited: props.favorited
});

const mapDispatchToProps = (dispatch, props) => (
  {
    editReply: (tweet) => {

    },
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(Reply);
