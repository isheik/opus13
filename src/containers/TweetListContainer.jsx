import { connect } from 'react-redux';
import TweetList from '../components/TweetList';

const mapStateToProps = (state, props) => {
  let tweetData = state.tweets['2195738078'];

  return {
    tweets: (tweetData[props.tab] || []),
  };
};

// const mapDispatchToProps = dispatch => (
//   {

//   }
// );

// export default connect(mapStateToProps, mapDispatchToProps)(TweetList);
export default connect(mapStateToProps, {})(TweetList);
