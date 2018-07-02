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
import regular from '@fortawesome/fontawesome-free-regular';

import App from '../components/App';
import actions from '../actions';
import FileManager from '../utils/FileManager';
import Authentication from '../utils/Authentication';
import tweets from '../reducers/tweets';

fontawesome.library.add(solid, regular);

// Reducer function names are corresponding to each state property name since redux do so
const mapStateToProps = state => (
  {
    // tweets: state.tweets['2195738078'],
    accounts: state.accounts,
    activeAccountIndex: state.activeAccountIndex,
  }
);

const mapDispatchToProps = dispatch => (
  {
    init: () => {
      ipcRenderer.send('twitter-auth-start');
    },
    subscribeIpcEvent: () => {
      ipcRenderer.on('twitter-auth-finish', (event, token) => {
        // const accounts = FileManager.readProperty('.opus13');

        // FUTURE: Specify an account when implementing multi account feature
        // const account = accounts;
        const account = token;
        // console.log(accounts);

        const twitterClient = new Twitter({
          consumer_key: Authentication.APP_KEY,
          consumer_secret: Authentication.APP_SECRET_KEY,
          access_token_key: account.oauth_token,
          access_token_secret: account.oauth_token_secret,
        });

        const params = {
          user_id: account.user_id,
        };

        twitterClient.get('users/show', params, (error, response) => {
          account.profile_img = response.profile_image_url_https;

          // dispatch(actions.addAccount(token));
          dispatch(actions.addAccount(account));
          dispatch(actions.changeActiveAccount(0));

          twitterClient.get('statuses/home_timeline', (error, tweets, response) => {
            if (!error) {
              for (let tweet of tweets) {
                dispatch(actions.addTweetToTab(account, 'home', tweet));
              }
            }
          });
        });
        // dispatch(accountActions.addAccount(token));
        // dispatch(accountActions.changeActiveAccount());
        // console.log(accounts.oauth_token);
        // console.log(token);

        // TODO: Fix here
        // const params = { screen_name: accounts.screen_name };
        // twitterClient.get('statuses/user_timeline', params, (error, tweets, response) => {

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

        twitterClient.get('statuses/home_timeline', (error, tweets, response) => {
          if (!error) {
            for (let tweet of tweets) {
              dispatch(actions.addTweetToTab(account, 'home', tweet));
            }
          } else {
            console.log(error);
          }
        });
      }
    },
    getFavoriteTweets: (account) => {
      if (account) {
        const twitterClient = new Twitter({
          consumer_key: Authentication.APP_KEY,
          consumer_secret: Authentication.APP_SECRET_KEY,
          access_token_key: account.oauth_token,
          access_token_secret: account.oauth_token_secret,
        });

        twitterClient.get('favorites/list', (error, tweets, response) => {
          if (!error) {
            // console.log('test');
            for (let tweet of tweets) {
              dispatch(actions.addTweetToTab(account, 'favorite', tweet));
            }
            // dispatch(actions.addTweetToTab(tweets, 'home'));
          } else {
            console.log(error);
          }
        });
      }
    },
    getMentionedTweets: (account) => {
      if (account) {
        const twitterClient = new Twitter({
          consumer_key: Authentication.APP_KEY,
          consumer_secret: Authentication.APP_SECRET_KEY,
          access_token_key: account.oauth_token,
          access_token_secret: account.oauth_token_secret,
        });

        twitterClient.get('statuses/mentions_timeline', (error, tweets, response) => {
          if (!error) {
            console.log(tweets);
            for (let tweet of tweets) {
              dispatch(actions.addTweetToTab(account, 'mentioned', tweet));
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

