import { connect } from 'react-redux';
import Twitter from 'twitter';
import actions from '../actions';
import SearchBar from '../components/SearchBar';
import Authentication from '../utils/authentication';

const mapStateToProps = (state, props) => ({

});

const mapDispatchToProps = (dispatch, props) => (
  {
    searchTwitter: (searchText) => {
      // do twitter things
      console.log(searchText);
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

      twitterClient.get('search/tweets', params, (error, response) => {
        if (!error) {
          console.log(response);
          console.log(error);
          for (let tweet of response.statuses) {
            // JUNE 25 need to clear state before putting new tweets ;otherwise, tweets are mixed when new queries are issued
            dispatch(actions.addTweetToTab(props.account, 'search', tweet));
          }
        } else {
          console.log(error);
        }
      });
    },
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
