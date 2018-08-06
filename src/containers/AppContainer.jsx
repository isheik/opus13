import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { ipcRenderer } from 'electron';
import Twitter from 'twitter';

import ReactDOM from 'react-dom';
import fontawesome from '@fortawesome/fontawesome';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import solid from '@fortawesome/fontawesome-free-solid';
import regular from '@fortawesome/fontawesome-free-regular';

import App from '../components/App';
import actions from '../actions';
import FileManager from '../utils/FileManager';
import Authentication from '../utils/Authentication';

fontawesome.library.add(solid, regular);

// Reducer function names are corresponding to each state property name since redux do so
const mapStateToProps = state => (
  {
    // tweets: state.tweets['2195738078'],
    accounts: state.accounts,
    activeAccountIndex: state.activeAccountIndex,
    // TODO: From here, make loading state
    // loading: true,
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
      });
    },
    getTweets: async (account) => {
      if (account) {
        const twitterClient = new Twitter({
          consumer_key: Authentication.APP_KEY,
          consumer_secret: Authentication.APP_SECRET_KEY,
          access_token_key: account.oauth_token,
          access_token_secret: account.oauth_token_secret,
        });

        try {
          // need to pass an empty object to suppress error
          const tweets = await twitterClient.get('statuses/home_timeline', {});
          for (let tweet of tweets) {
            dispatch(actions.addTweetToTab(account, 'home', tweet));
          }
        } catch (error) {
          console.log(error);
        }
      }
    },
    getFavoriteTweets: async (account) => {
      if (account) {
        const twitterClient = new Twitter({
          consumer_key: Authentication.APP_KEY,
          consumer_secret: Authentication.APP_SECRET_KEY,
          access_token_key: account.oauth_token,
          access_token_secret: account.oauth_token_secret,
        });

        try {
          const tweets = await twitterClient.get('favorites/list', {});
          for (let tweet of tweets) {
            dispatch(actions.addTweetToTab(account, 'favorite', tweet));
          }
        } catch (error) {
          console.log(error);
        }
      }
    },
    getMentionedTweets: async (account) => {
      if (account) {
        const twitterClient = new Twitter({
          consumer_key: Authentication.APP_KEY,
          consumer_secret: Authentication.APP_SECRET_KEY,
          access_token_key: account.oauth_token,
          access_token_secret: account.oauth_token_secret,
        });

        try {
          const tweets = await twitterClient.get('statuses/mentions_timeline', {});
          for (let tweet of tweets) {
            dispatch(actions.addTweetToTab(account, 'mentioned', tweet));
          }
        } catch (error) {
          console.log(error);
        }
      }
    },
  }
);

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));

