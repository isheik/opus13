import { connect } from 'react-redux';
import Favorite from '../components/Favorite';

import Twitter from 'twitter';

const mapStateToProps = (state, props) => ({
  // favorited: props.favorited
});

const mapDispatchToProps = dispatch => (
  {
    toggleFavorited: (favorited) => {
      favorited
        ?
        :;

    }
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(Favorite);
