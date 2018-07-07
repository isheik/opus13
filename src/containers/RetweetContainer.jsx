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
    toggleRetweeted: async (tweet) => {
      const twitterClient = new Twitter({
        consumer_key: Authentication.APP_KEY,
        consumer_secret: Authentication.APP_SECRET_KEY,
        access_token_key: props.account.oauth_token,
        access_token_secret: props.account.oauth_token_secret,
      });

      console.log('client1');
      console.log(twitterClient);
      const params = {
        id: tweet.id_str,
      };

      // TODO: fix unretweet
      if (tweet.retweeted) {
        try {
          const returnedTweet = await twitterClient.post('statuses/unretweet', params);
          console.log('unret');
          console.log(returnedTweet);
        }
        catch (error) {
        }
        // twitterClient.post('statuses/unretweet', params, (error, returnedTweet, response) => {
          // TODO: need to add tab info
          // TODO: del unretweetec tweet
          // console.log('unret');
          // console.log(returnedTweet);
          // TODO: del unretweetec tweet
          // dispatch(actions.addTweetToTab(props.account, 'home', returnedTweet));
        // });
      } else {
        try {
          const retweetedTweet = await twitterClient.post('statuses/retweet', params);
          // twitterClient.post('statuses/retweet', params, (error, returnedTweet, response) => {
            console.log(retweetedTweet);
  
            console.log('client2');
            console.log(retweetedTweet);
            // dispatch(actions.addTweetToTab(props.account, 'home', returnedTweet));
            const paramsa = {
              status: retweetedTweet.text,
            };

            const returnedTweet = await twitterClient.post('statuses/update', paramsa);
            dispatch(actions.addTweetToTab(props.account, 'home', returnedTweet));
        }
          catch (error) {
            console.log(error);
          }
          // twitterClient.post('statuses/update', paramsa, (error, tweet, response) => {
            // if (!error) {
              // console.log(tweet);
              // dispatch(actions.addTweetToTab(props.account, 'home', tweet));
              // twitterClient.get('statuses/home_timeline', (error, tweets, response) => {
              //   if (!error) {
              //     // console.log('test');
              //     for (let tweet of tweets) {
              //       dispatch(actions.addTweetToTab(props.account, 'home', tweet));
              //     }
              //     // dispatch(actions.addTweetToTab(tweets, 'home'));
              //   }
              // });
            // } else {
              // console.log(error);
            // }
          // });
        // });
      }
    },
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(Retweet);
