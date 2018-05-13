import { connect } from 'react-redux';
import Twitter from 'twitter';
import Retweet from '../components/Retweet';
import Authentication from '../utils/Authentication';
import actions from '../actions';

const mapStateToProps = (state, props) => ({
  // favorited: props.favorited
});

const mapDispatchToProps = (dispatch, props) => (
  {
    toggleRetweeted: (tweet) => {
      const twitterClient = new Twitter({
        consumer_key: Authentication.APP_KEY,
        consumer_secret: Authentication.APP_SECRET_KEY,
        access_token_key: props.account.oauth_token,
        access_token_secret: props.account.oauth_token_secret,
      });

      const params = {
        id: tweet.id_str,
      };

      if (tweet.retweeted) {
        twitterClient.post('statuses/unretweet/:id', params, (error, returnedTweet, response) => {
          // TODO: need to add tab info
          // TODO: del unretweetec tweet
          // dispatch(actions.addTweetToTab(props.account, 'home', returnedTweet));
        });
      } else {
        twitterClient.post('statuses/retweet/:id', params, (error, returnedTweet, response) => {
          dispatch(actions.addTweetToTab(props.account, 'home', returnedTweet));
        });
      }
    },
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(Retweet);
