import { connect } from 'react-redux';
import Twitter from 'twitter';
import Home from '../components/Home';


const mapStateToProps = state => (
  {
    accounts: state.account,
    activeAccountIndex: state.activeAccountIndex,
  }
);

const mapDispatchToProps = dispatch => (
  {
    getTweets: () => {

    },
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(Home);
