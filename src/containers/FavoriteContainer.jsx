import { connect } from 'react-redux';
import Twitter from 'twitter';
import Favorite from '../components/Favorite';
import Authentication from '../utils/Authentication';
import actions from '../actions';

const mapStateToProps = (state, props) => ({
  // favorited: props.favorited
});

const mapDispatchToProps = (dispatch, props) => (
  {
    toggleFavorited: async (tweet) => {
      const twitterClient = new Twitter({
        consumer_key: Authentication.APP_KEY,
        consumer_secret: Authentication.APP_SECRET_KEY,
        access_token_key: props.account.oauth_token,
        access_token_secret: props.account.oauth_token_secret,
      });

      const params = {
        id: tweet.id_str,
      };

      if (tweet.favorited) {
        const returnedTweet = await twitterClient.post('favorites/destroy', params);
        // TODO: the order of fav tab is inverse.
        dispatch(actions.addTweetToTab(props.account, 'home', returnedTweet));
        dispatch(actions.deleteTweetFromTab(props.account, 'favorite', returnedTweet));
      } else {
        const returnedTweet = await twitterClient.post('favorites/create', params);
        dispatch(actions.addTweetToTab(props.account, 'home', returnedTweet));
      }
      // if (tweet.favorited) {
      //   twitterClient.post('favorites/destroy', params, (error, returnedTweet, response) => {
      //     // TODO: need to add tab info
      //     dispatch(actions.addTweetToTab(props.account, 'home', returnedTweet));
      //     // dispatch(actions.addTweetToTab(props.account, 'favorite', returnedTweet));
      //     dispatch(actions.deleteTweetFromTab(props.account, 'favorite', returnedTweet));
      //   });
      // } else {
      //   twitterClient.post('favorites/create', params, (error, returnedTweet, response) => {
      //     dispatch(actions.addTweetToTab(props.account, 'home', returnedTweet));
      //   });
      // }
    },
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(Favorite);
