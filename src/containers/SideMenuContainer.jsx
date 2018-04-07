import { connect } from 'react-redux';
import Twitter from 'twitter';
import Home from '../components/Home';
import actions from '../actions/';


const mapStateToProps = state => (
  {
    accounts: state.account,
    activeAccountIndex: state.activeAccountIndex,
  }
);

const mapDispatchToProps = dispatch => (
  {
    getTweets: (account) => {
      const twitterClient = new Twitter({
        consumer_key: Authentication.APP_KEY,
        consumer_secret: Authentication.APP_SECRET_KEY,
        access_token_key: accounts.oauth_token,
        access_token_secret: accounts.oauth_token_secret,
      });

      const params = { screen_name: accounts.screen_name };
      twitterClient.get('statuses/user_timeline', params, (error, tweets, response) => {
        if (!error) {
          console.log(tweets);
          dispatch(actions.addTweetToTab(tweets, 'home'));
        }
      });

    },
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(Home);
