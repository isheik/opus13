import { connect } from 'react-redux';
import Twitter from 'twitter';
import SideMenu from '../components/SideMenu';
import actions from '../actions/';
import Authentication from '../utils/Authentication';

// not used
const mapStateToProps = state => (
  {
    accounts: state.accounts,
    activeAccountIndex: state.activeAccountIndex,
    tweets: state.tweets,
  }
);

// from presentation... call getTweets on click using accounts[index]
const mapDispatchToProps = dispatch => (
  {
    getTweets: (account) => {
      const twitterClient = new Twitter({
        consumer_key: Authentication.APP_KEY,
        consumer_secret: Authentication.APP_SECRET_KEY,
        access_token_key: account.oauth_token,
        access_token_secret: account.oauth_token_secret,
      });

      const params = { screen_name: account.screen_name };
      // console.log(twitterClient);
      twitterClient.get('statuses/user_timeline', params, (error, tweets, response) => {
        if (!error) {
          dispatch(actions.addTweetToTab(tweets, 'home'));
        }
      });
    },
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(SideMenu);
