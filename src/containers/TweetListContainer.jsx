import { connect } from 'react-redux';
import { TweetList } from '../components/TweetList';

const mapStateToProps = state => (
  {
    tweets: state.tweets,
  }
);

const mapDispatchToProps = dispatch => (
  {
    

  }
);

export default connect(mapStateToProps, mapDispatchToProps)(TweetList);
