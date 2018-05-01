import React from 'react';
import { connect } from 'react-redux';
import Twitter from 'twitter';
import Authentication from '../utils/Authentication';
import actions from '../actions/';
import Editor from '../components/Editor';

const mapStateToProps = (state, props) => (
  {
    accounts: props.accounts,
  }
);

const mapDispatchToProps = dispatch => (
  {
    postTweet: (account, tweetText) => {
      const twitterClient = new Twitter({
        consumer_key: Authentication.APP_KEY,
        consumer_secret: Authentication.APP_SECRET_KEY,
        access_token_key: account.oauth_token,
        access_token_secret: account.oauth_token_secret,
      });

      const params = {
        status: tweetText,
      };
      twitterClient.post('statuses/update', params, (error, tweet, response) => {
        if (!error) {
          console.log(tweet);
        }
      });
    },
    handleKeyPress: (event) => {
      event.preventDefault();
    },
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(Editor);
