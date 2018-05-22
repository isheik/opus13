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
      dispatch(actions.setInReplyTo(tweet));
      dispatch(actions.setText(`@${tweet.user.screen_name} `));
    },
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(Reply);
