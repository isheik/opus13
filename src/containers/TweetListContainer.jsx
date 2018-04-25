import { connect } from 'react-redux';
import TweetList from '../components/TweetList';

const mapStateToProps = (state, props) => {
  let tweetData = state.tweets['2195738078'];
  // let tweetsa = (tweetData && tweetData[props.tab]) || [];
  let tweetsa = (tweetData && tweetData[props.tab]) || [];

  return {
    // tweets: (tweetData[props.tab] || []),
    tweets: tweetsa,
  };
};

// const mapDispatchToProps = dispatch => (
//   {

//   }
// );

// export default connect(mapStateToProps, mapDispatchToProps)(TweetList);
export default connect(mapStateToProps, {})(TweetList);
