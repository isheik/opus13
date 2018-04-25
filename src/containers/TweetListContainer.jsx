import { connect } from 'react-redux';
import TweetList from '../components/TweetList';

const mapStateToProps = (state, props) => {
  let tweetData = (state.tweets && state.tweets[(props.account && props.account.user_id)]) || null;
  // let tweetData = state.tweets['2195738078'];
  // let tweetsa = (tweetData && tweetData[props.tab]) || [];
  let tweets = (tweetData && tweetData[props.tab]) || [];

  return {
    // tweets: (tweetData[props.tab] || []),
    tweets: tweets,
  };
};
// "2195738078"

// const mapDispatchToProps = dispatch => (
//   {

//   }
// );

// export default connect(mapStateToProps, mapDispatchToProps)(TweetList);
export default connect(mapStateToProps, {})(TweetList);
