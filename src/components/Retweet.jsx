import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { Transition } from 'react-transition-group';

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


class Retweet extends React.Component {
  state = {
    hovered: false,
  }
  onMouseEnter = () => {
    this.setState({ hovered: true });
  }
  onMouseLeave = () => {
    this.setState({ hovered: false });
  }
  handleRetweetClick = () => {
    // this.props.toggleFavorited(this.props.tweet);
    this.props.toggleRetweeted(this.props.tweet);
  }
  render() {
    const { hovered } = { ...this.state };
    return (
      <div className="tweet-item-icon">
        {
          // <Transition in={hovered} timeout={100}>
          this.props.tweet.retweeted
            ?
            <FontAwesomeIcon
              icon="retweet"
              color='#2aa198'
              onClick={this.handleRetweetClick}
              onMouseEnter={this.onMouseEnter}
              onMouseLeave={this.onMouseLeave}
            />
            :
            <FontAwesomeIcon
              icon="retweet"
              color={hovered ? '#2aa198' : ''}
              onClick={this.handleRetweetClick}
              onMouseEnter={this.onMouseEnter}
              onMouseLeave={this.onMouseLeave}
            />
          // </Transition>
        }
      </div>
    );
  }
}

// {
//   this.props.tweet.retweeted
//     ? <FontAwesomeIcon icon="retweet" color="#859900" onClick={this.handleRetweetClick} />
//     : <FontAwesomeIcon icon="retweet" onClick={this.handleRetweetClick} />
// }

export default Retweet;
