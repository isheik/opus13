import React from 'react';
import { connect } from 'react-redux';
import Twitter from 'twitter';
import Authentication from '../utils/Authentication';
import actions from '../actions/';
import Editor from '../components/Editor';

const mapStateToProps = (state, props) => (
  {
    text: state.editorText,
    replyToID: state.reply,
    // account: props.account,
    // activeAccountIndex: props.activeAccountIndex,
  }
);

const mapDispatchToProps = (dispatch, props) => (
  {
    postTweet: async (tweetText, replyToID) => {
      const twitterClient = new Twitter({
        consumer_key: Authentication.APP_KEY,
        consumer_secret: Authentication.APP_SECRET_KEY,
        access_token_key: props.account.oauth_token,
        access_token_secret: props.account.oauth_token_secret,
      });

      const params = {
        status: tweetText,
        in_reply_to_status_id: replyToID,
      };

      // TODO: check again after laptop back
      try {
        const tweet = await twitterClient.post('statuses/update', params);
        const regex = new RegExp(`.*@${props.account.screen_name}.*`);
        dispatch(actions.addTweetToTab(props.account, 'home', tweet));

        if (regex.test(tweet.text)) {
          dispatch(actions.addTweetToTab(props.account, 'mentioned', tweet));
        }
      } 
      catch (error) {
          console.log(error);
      }
      // twitterClient.post('statuses/update', params, (error, tweet, response) => {
      //   if (!error) {
      //     const regex = new RegExp(`.*@${props.account.screen_name}.*`);
      //     dispatch(actions.addTweetToTab(props.account, 'home', tweet));

      //     // TODO: Improve tweet stock order logic
      //     if (regex.test(tweet.text)) {
      //       dispatch(actions.addTweetToTab(props.account, 'mentioned', tweet));
      //     }
      //   } else {
      //     console.log(error);
      //   }
      // });
    },
    setText: (text) => {
      dispatch(actions.setText(text));
    },
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(Editor);
