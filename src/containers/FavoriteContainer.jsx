import { connect } from 'react-redux';
import Favorite from '../components/Favorite';

const mapStateToProps = (state, props) => ({
  // favorited: props.favorited
});

const mapDispatchToProps = {

};

export default connect(mapStateToProps, mapDispatchToProps)(Favorite);
