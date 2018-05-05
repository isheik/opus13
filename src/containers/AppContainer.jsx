import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { ipcRenderer } from 'electron';
import Twitter from 'twitter';

// import * as accountActions from '../actions/account';
import ReactDOM from 'react-dom';
import fontawesome from '@fortawesome/fontawesome';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
// import brands from '@fortawesome/fontawesome-free-brands'
// import faCheckSquare from '@fortawesome/fontawesome-free-solid/faCheckSquare'
// import faCoffee from '@fortawesome/fontawesome-free-solid/faCoffee'
// import faStar from '@fortawesome/fontawesome-free-solid/faStar'
import solid from '@fortawesome/fontawesome-free-solid';

import App from '../components/App';
import actions from '../actions';
import FileManager from '../utils/FileManager';
import Authentication from '../utils/Authentication';
import tweets from '../reducers/tweets';

fontawesome.library.add(solid);

// Reducer function names are corresponding to each state property name since redux do so
const mapStateToProps = state => (
  {
    // tweets: state.tweets['2195738078'],
    accounts: state.accounts,
    activeAccountIndex: state.activeAccountIndex,
  }
);

// NEXT: Implement home timeline display
const mapDispatchToProps = dispatch => (
  {
    init: () => {
      ipcRenderer.send('twitter-auth-start');
    },
    subscribeIpcEvent: () => {
      ipcRenderer.on('twitter-auth-finish', (event, token) => {
        const accounts = FileManager.readProperty('.opus13');
        console.log(accounts);
        // dispatch(accountActions.addAccount(token));
        // dispatch(accountActions.changeActiveAccount());
        dispatch(actions.addAccount(token));
        dispatch(actions.changeActiveAccount(0));
        // console.log(accounts.oauth_token);
        // console.log(token);

        // TODO: Fix here
        const twitterClient = new Twitter({
          consumer_key: Authentication.APP_KEY,
          consumer_secret: Authentication.APP_SECRET_KEY,
          access_token_key: accounts.oauth_token,
          access_token_secret: accounts.oauth_token_secret,
        });

        // const params = { screen_name: accounts.screen_name };
        // twitterClient.get('statuses/user_timeline', params, (error, tweets, response) => {
        twitterClient.get('statuses/home_timeline', (error, tweets, response) => {
          if (!error) {
            for (let tweet of tweets) {
              dispatch(actions.addTweetToTab(accounts, 'home', tweet));
            }
          }
        });
      });
    },
    getTweets: (account) => {
      if (account) {
        const twitterClient = new Twitter({
          consumer_key: Authentication.APP_KEY,
          consumer_secret: Authentication.APP_SECRET_KEY,
          access_token_key: account.oauth_token,
          access_token_secret: account.oauth_token_secret,
        });

        // const params = { screen_name: account.screen_name };
        // console.log(twitterClient);
        // console.log(account);
        // twitterClient.get('statuses/user_timeline', params, (error, tweets, response) => {
        twitterClient.get('statuses/home_timeline', (error, tweets, response) => {
          if (!error) {
            // console.log('test');
            for (let tweet of tweets) {
              dispatch(actions.addTweetToTab(account, 'home', tweet));
            }
            // dispatch(actions.addTweetToTab(tweets, 'home'));
          } else {
            console.log(error);
          }
        });
      }
    },
  }
);

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));

