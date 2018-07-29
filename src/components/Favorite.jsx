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

class Favorite extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hovered: false,
    };
    // this.onMouseEnter = this.onMouseEnter.bind(this);
    // this.onMouseLeave = this.onMouseLeave.bind(this);
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
        {
          // July27 Fix here
          this.props.tweet.favorited
            ?
            <Transition in={this.props.tweet.favorited} timeout={1000}>
              {
                (state) => {
                  const styles = {
                    entering: {
                      // transform: 'rotate(45deg)',
                      // transition: 'transform 0.2s linear',
                      // fontSize: '50px',
                      transform: 'scale(1.3) rotate(360deg)',
                      transition: 'transform 0.1s ease-in',
                    },
                    entered: {
                      // transform: 'rotate(45deg)',
                      // transform: 'scale(1.2)',
                      // transition: 'transform 0.1s linear',
                      transform: 'scale(1.0) rotate(0deg)',
                      transition: 'transform 0.1s ease-in',
                      // fontSize: '50px',
                    },
                    exiting: {
                      // transform: 'rotate(70deg)',
                      transform: 'scale(1.3) rotate(360deg)',
                      transition: 'transform 0.1s ease-in',
                      // fontSize: '50px',
                    },
                    exited: {
                      transform: 'scale(1.0)',
                      // transform: 'rotate(0deg)',
                      transition: 'transform 0.3s linear',
                      // fontSize: '50px',
                    },
                  };
                  console.log(state);
                  console.log(this.props.tweet.favorited);

                  return (<FontAwesomeIcon
                    icon="star"
                    color="#b58900"
                    style={styles[state]}
                    onClick={this.handleFavClick}
                  />);
                }
              }
            </Transition>
            :
            <FontAwesomeIcon
              icon={['far', 'star']}
              color={this.state.hovered ? '#b58900' : ''}
              onMouseEnter={this.onMouseEnter}
              onMouseLeave={this.onMouseLeave}
              onClick={this.handleFavClick}
            />
        }
      </div>
    );
  }
}


// <Transition in={this.state.hovered} timeout={100}>
//   {
//     state => {

//       (<FontAwesomeIcon
//         icon={['far', 'star']}
//         color={state === 'entered' ? '#b58900' : ''}
//         onMouseEnter={this.onMouseEnter}
//         onMouseLeave={this.onMouseLeave}
//         onClick={this.handleFavClick}
//       />)
//     }
//   }
// </Transition >



export default Favorite;
