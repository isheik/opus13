import { connect } from 'react-redux';
import Favorite from '../components/Favorite';

const mapStateToProps = (state, props) => ({
  // favorited: props.favorited
});

const mapDispatchToProps = dispatch => (
  {
    toggleFavorited: (favorited) => {

    }
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(Favorite);
