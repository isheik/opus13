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
      console.log(tweet.retweeted);
      const params = {
        id: tweet.id_str,
      };

      // TODO: fix unretweet
      // tweet.retweeted does not become true -> become true if you click added tweet
      // the retweeted tweet and original tweet seems to have different ID and states(retweeted=true or count etc)
      // So might have to track the retweeted original tweet ID
      // something like, RT -> swap original tweet with new returned tweet
      if (tweet.retweeted) {
        try {
          const returnedTweet = await twitterClient.post('statuses/unretweet', params);
          returnedTweet.retweeted = false;
          console.log('unret');
          // console.log(returnedTweet.retweeted_status);
          console.log(returnedTweet);
          dispatch(actions.addTweetToTab(props.account, 'home', returnedTweet));
        } catch (error) {
        }
        // twitterClient.post('statuses/unretweet', params, (error, returnedTweet, response) => {
        // TODO: need to add tab info
        // TODO: del unretweetec tweet
        // console.log('unret');
        // console.log(returnedTweet);
        // TODO: del unretweetec tweet
        // dispatch(actions.addTweetToTab(props.account, 'home', returnedTweet));
        // });
        // TODO: returnedTweet is unretweet tweet. not sure what to do here yet.
        // modifying RT count and flag and displaying the tweet is a way to go? Read tweet dev doc more
      } else {
        try {
          const returnedTweet = await twitterClient.post('statuses/retweet', params);
          // twitterClient.post('statuses/retweet', params, (error, returnedTweet, response) => {
          console.log(returnedTweet);

          // console.log('client2');
          // console.log(retweetedTweet);
          // dispatch(actions.addTweetToTab(props.account, 'home', returnedTweet));
          // const paramsa = {
          //   status: retweetedTweet.text,
          // };

          // TODO: check the returned tweet existence on home, if not, do not add.. same as Fav bug fix
          dispatch(actions.addTweetToTab(props.account, 'home', returnedTweet.retweeted_status));
        } catch (error) {
          console.log(error);
        }
      }
    },
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(Retweet);
