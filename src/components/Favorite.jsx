import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import Transition from 'react-transition-group';

// const Favorite = props => (
//   <div>
//     {
//       console.log(props)}
//     {props.favorited
//       ? (<FontAwesomeIcon icon="star" color="yellow" />)
//       : (<FontAwesomeIcon icon={['far', 'star']} />)
//     }
//   </div>
// );


class Favorite extends React.Component {
  constructor() {
    super();
    this.state = {
      hovered: false
    };
    this.onMouseEnter = this.onMouseEnter.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);
  }
  onMouseEnter() {
    this.setState({ hovered: true });
  }
  onMouseLeave() {
    this.setState({ hovered: false });
  }
  handleFavClick = () => {
    console.log('test');
    this.props.toggleFavorited(this.props.tweet);
  }
  render() {
    console.log(this.state);
    return (
      <div className="tweet-item-icon">
        {
          // tomorrow here
          // <Transition in={this.props.tweet.favorited} timeout={500}>
          // {state =>
          // : (<FontAwesomeIcon icon={['far', 'star']} onClick={this.handleFavClick} />)
          // }
          // </Transition>
          // <FontAwesomeIcon icon={this.state.favorited ? 'star' : ['far', 'star']} color={this.state.hovered ? "#b58900" : ""} onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave} onClick={this.handleFavClick} />
        }

        {
          this.props.tweet.favorited
            ? <FontAwesomeIcon
              icon="star"
              color="#b58900"
              onClick={this.handleFavClick}
            />
            : <FontAwesomeIcon
              icon={['far', 'star']}
              color={this.state.hovered ? '#b58900' : ''}
              onMouseEnter={this.onMouseEnter}
              onMouseLeave={this.onMouseLeave}
              onClick={this.handleFavClick}
            />
          // : (<FontAwesomeIcon icon={['far', 'star']} onClick={this.handleFavClick} />)
        }
      </div>
    )
  }
}




export default Favorite;
