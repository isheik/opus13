import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { Transition } from 'react-transition-group';

class Favorite extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hovered: false,
    };
  }
  onMouseEnter = () => {
    this.setState({ hovered: true });
  }
  onMouseLeave = () => {
    this.setState({ hovered: false });
  }
  handleFavClick = () => {
    console.log('test');
    this.props.toggleFavorited(this.props.tweet);
  }
  render() {
    return (
      <div className="tweet-item-icon">
        <Transition in={this.props.tweet.favorited} timeout={400}>
          {
            (state) => {
              // July27 Fix here

              const styles = {
                entering: {
                  // transform: 'rotate(45deg)',
                  // transition: 'transform 0.2s linear',
                  // fontSize: '50px',
                  transform: 'scale(1.2) rotate(30deg)',
                  transition: 'transform 0.2s ease-in',
                },
                entered: {
                  transform: 'scale(1.0) rotate(0deg)',
                  transition: 'transform 0.2s ease-in',
                },
                exiting: {
                  // transform: 'rotate(70deg)',
                  // transform: 'scale(1.1) rotate(20deg)',
                  // transition: 'transform 0.1s ease-in',
                  // fontSize: '50px',
                },
                exited: {
                  // transform: 'scale(1.0)',
                  // transform: 'rotate(0deg)',
                  // transition: 'transform 0.1s linear',
                  // fontSize: '50px',
                },
              };
              console.log(state);
              console.log(this.props.tweet.favorited);

              return (
                this.props.tweet.favorited
                  ?
                  (<FontAwesomeIcon
                    icon="star"
                    color="#b58900"
                    style={styles[state]}
                    onClick={this.handleFavClick}
                  />)
                  :
                  (<FontAwesomeIcon
                    icon={['far', 'star']}
                    color={this.state.hovered ? '#b58900' : ''}
                    onMouseEnter={this.onMouseEnter}
                    onMouseLeave={this.onMouseLeave}
                    onClick={this.handleFavClick}
                  />)
              );
            }
          }
        </Transition>
      </div>
    );
  }
}

export default Favorite;
