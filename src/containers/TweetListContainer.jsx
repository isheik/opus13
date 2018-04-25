import { connect } from 'react-redux';
import TweetList from '../components/TweetList';

const mapStateToProps = (state, props) => {
  console.log(props.account);
  let tweetData = (state.tweets && state.tweets[(props.account && props.account['user_id'])]) || null;
  // let tweetsa = (tweetData && tweetData[props.tab]) || [];
  let tweetsa = (tweetData && tweetData[props.tab]) || [];
  console.log(props.tweetsa);

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
