import { connect } from 'react-redux';
import SearchBar from '../components/SearchBar';

const mapStateToProps = (state, props) => ({

});

const mapDispatchToProps = props => (
  {
    searchTwitter: searchText => {
      // do twitter things
      console.log(searchText);
    },
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
