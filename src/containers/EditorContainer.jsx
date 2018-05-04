import React from 'react';
import { connect } from 'react-redux';
import Twitter from 'twitter';
import Authentication from '../utils/Authentication';
import actions from '../actions/';
import Editor from '../components/Editor';

const mapStateToProps = (state, props) => (
  {
    // account: props.account,
    // activeAccountIndex: props.activeAccountIndex,
  }
);

const mapDispatchToProps = (dispatch, props) => (
  {
    postTweet: (tweetText) => {
      const twitterClient = new Twitter({
        consumer_key: Authentication.APP_KEY,
        consumer_secret: Authentication.APP_SECRET_KEY,
        access_token_key: props.account.oauth_token,
        access_token_secret: props.account.oauth_token_secret,
      });

      const params = {
        status: tweetText,
      };
      twitterClient.post('statuses/update', params, (error, tweet, response) => {
        if (!error) {
          console.log(tweet);
          dispatch(actions.addTweetToTab(props.account, 'home', tweet));
          // twitterClient.get('statuses/home_timeline', (error, tweets, response) => {
          //   if (!error) {
          //     // console.log('test');
          //     for (let tweet of tweets) {
          //       dispatch(actions.addTweetToTab(props.account, 'home', tweet));
          //     }
          //     // dispatch(actions.addTweetToTab(tweets, 'home'));
          //   }
          // });
        } else {
          console.log(error);
        }
      });
    },
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(Editor);