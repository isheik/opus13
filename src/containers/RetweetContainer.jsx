import { connect } from 'react-redux';
import Twitter from 'twitter';
import Retweet from '../components/Retweet';
import Authentication from '../utils/Authentication';
import actions from '../actions';

const mapStateToProps = (state, props) => ({
  // favorited: props.favorited
});

const mapDispatchToProps = (dispatch, props) => (
  {
    toggleRetweeted: (tweet) => {
      const twitterClient = new Twitter({
        consumer_key: Authentication.APP_KEY,
        consumer_secret: Authentication.APP_SECRET_KEY,
        access_token_key: props.account.oauth_token,
        access_token_secret: props.account.oauth_token_secret,
      });

      const params = {
        id: tweet.id_str,
      };
      console.log(tweet);

      if (tweet.retweeted) {
        twitterClient.post('statuses/unretweet', params, (error, returnedTweet, response) => {
          // TODO: need to add tab info
          // TODO: del unretweetec tweet
          console.log(returnedTweet);
          dispatch(actions.addTweetToTab(props.account, 'home', returnedTweet));
        });
      } else {
        twitterClient.post('statuses/retweet', params, (error, returnedTweet, response) => {
          console.log(returnedTweet);
          dispatch(actions.addTweetToTab(props.account, 'home', returnedTweet));
        });
      }
    },
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

export default connect(mapStateToProps, mapDispatchToProps)(Retweet);