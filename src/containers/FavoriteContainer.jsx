import { connect } from 'react-redux';
import Favorite from '../components/Favorite';

import Twitter from 'twitter';

const mapStateToProps = (state, props) => ({
  // favorited: props.favorited
});

const mapDispatchToProps = (dispatch, props) => (
  {
    toggleFavorited: (favorited) => {
      const twitterClient = new Twitter({
        consumer_key: Authentication.APP_KEY,
        consumer_secret: Authentication.APP_SECRET_KEY,
        access_token_key: props.account.oauth_token,
        access_token_secret: props.account.oauth_token_secret,
      });

      favorited
        ? twitterClient()
        :;

    }
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(Favorite);
