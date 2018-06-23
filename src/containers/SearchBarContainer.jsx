import { connect } from 'react-redux';
import SearchBar from '../components/SearchBar';

const mapStateToProps = (state, props) => ({

});

const mapDispatchToProps = props => (
  {
    searchTwitter: () => {
      // do twitter things
      console.log("search");


    },
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
