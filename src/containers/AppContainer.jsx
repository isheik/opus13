import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { ipcRenderer } from 'electron';
import Twitter from 'twitter';

import App from '../components/App';
// import * as accountActions from '../actions/account';
import actions from '../actions';

import FileManager from '../utils/FileManager';
import Authentication from '../utils/Authentication';

// Reducer function names are corresponding to each state property name since redux do so
const mapStateToProps = state => (
  {
    tweets: state.tweets,
    accounts: state.accounts,
    activeAccount: state.activeAccountIndex,
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
        // dispatch(accountActions.addAccount(token));
        // dispatch(accountActions.changeActiveAccount());
        dispatch(actions.addAccount(token));
        dispatch(actions.changeActiveAccount());
        // console.log(accounts.oauth_token);
        // console.log(token);

        // TODO: Fix here
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
      });
    },
  }
);

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));

