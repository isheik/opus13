import { connect } from 'react-redux';
import TweetList from '../components/TweetList';

const mapStateToProps = (state, props) => {
  let tweetData = (state.tweets && state.tweets[(props.account && props.account.user_id)]) || null;
  let tweets = (tweetData && tweetData[props.tab]) || [];

  return {
    tweets: tweets,
  };
};
// "2195738078"

// export default connect(mapStateToProps, mapDispatchToProps)(TweetList);
export default connect(mapStateToProps, {})(TweetList);
