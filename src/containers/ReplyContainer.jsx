import { connect } from 'react-redux';
import Twitter from 'twitter';
import Reply from '../components/Reply';
import Authentication from '../utils/Authentication';
import actions from '../actions';

const mapStateToProps = (state, props) => ({
  // favorited: props.favorited
});

const mapDispatchToProps = (dispatch, props) => (
  {
    postReply: (tweet) => {
      const twitterClient = new Twitter({
        consumer_key: Authentication.APP_KEY,
        consumer_secret: Authentication.APP_SECRET_KEY,
        access_token_key: props.account.oauth_token,
        access_token_secret: props.account.oauth_token_secret,
      });

      const params = {
        id: tweet.id_str,
      };

      if (tweet.retweeted) {
        twitterClient.post('statuses/unretweet', params, (error, returnedTweet, response) => {
          // TODO: need to add tab info
          // TODO: del unretweetec tweet
          console.log('unret');
          console.log(returnedTweet);
          // TODO: del unretweetec tweet
          // dispatch(actions.addTweetToTab(props.account, 'home', returnedTweet));
        });
      } else {
        // NEXT: fix here cant auth
        twitterClient.post('statuses/retweet', params, (error, returnedTweet, response) => {
          console.log(returnedTweet);

          console.log('client2');
          console.log(twitterClient);
          // dispatch(actions.addTweetToTab(props.account, 'home', returnedTweet));
          const paramsa = {
            status: returnedTweet.text,
          };
          twitterClient.post('statuses/update', paramsa, (error, tweet, response) => {
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
        });
      }
    },
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(Reply);
