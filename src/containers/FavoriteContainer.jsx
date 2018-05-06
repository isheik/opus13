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
    toggleFavorited: (tweet) => {
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
        twitterClient.post('favorites/destroy', params, (error, tweet, response) => {
          console.log('dest');
          console.log(rtweet);
          dispatch(actions.addTweetToTab(props.account, 'home', rtweet));
        });
      } else {
        twitterClient.post('favorites/create', params, (error, rtweet, response) => {
          console.log('create');
          console.log(rtweet);
          dispatch(actions.addTweetToTab(props.account, 'home', rtweet));
        });
      }
    },
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(Favorite);
