import { connect } from 'react-redux';
import Twitter from 'twitter';
import actions from '../actions';
import SearchBar from '../components/SearchBar';
import Authentication from '../utils/authentication';

const mapStateToProps = (state, props) => ({

});

const mapDispatchToProps = (dispatch, props) => (
  {
    searchTwitter: async (searchText) => {
      const twitterClient = new Twitter({
        consumer_key: Authentication.APP_KEY,
        consumer_secret: Authentication.APP_SECRET_KEY,
        access_token_key: props.account.oauth_token,
        access_token_secret: props.account.oauth_token_secret,
      });

      const queryString = encodeURIComponent(searchText);
      const params = {
        q: queryString,
      };

      let response;
      try {
        response = await twitterClient.get('search/tweets', params);
        dispatch(actions.clearTweetsFromTab(props.account, 'search'));
        for (let tweet of response.statuses) {
          dispatch(actions.addTweetToTab(props.account, 'search', tweet));
        }
      } catch (error) {
        console.log(error);
      }
    },
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
