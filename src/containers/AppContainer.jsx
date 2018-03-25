import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { ipcRenderer } from 'electron';
import Twitter from 'twitter';

import App from '../components/App';
import tweetsActions from '../actions/tweets';

import FileManager from '../utils/FileManager';
import Authentication from '../utils/Authentication';

const mapStateToProps = state => (
  { tweets: state.tweets }
);

// const authtest = () => {
// Authentication.generateSignature();
// ipcRenderer.send('twitter-auth-start');
// Authentication.authenticate();
// console.log("test3");
// };

// authtest();

const mapDispatchToProps = dispatch => (
  {
    // handleTodoAdd(value) {
    // dispatch(Actions.addTodo(value));
    // },
    init: () => {
      ipcRenderer.send('twitter-auth-start');
    },
    subscribeIpcEvent: () => {
      ipcRenderer.on('twitter-auth-finish', (event, token) => {
        // const accounts = FileManager.readProperty('.opus13');
        // dispatch(tweetsActions.addAccount());
        // console.log(accounts.oauth_token);
        console.log(token);
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
          }
        });
      });
    },
  }
);

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));

