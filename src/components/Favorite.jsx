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
  handleFavClick = () => {
    console.log('test');
    this.props.toggleFavorited(this.props.tweet);
  }
  render() {
    return (
      <div className="tweet-item-icon">
        {
          // tomorrow here
          <Transition in={this.props.tweet.favorited} timeout={500}>
            {state =>
              this.props.tweet.favorited
                ?
                // (<FontAwesomeIcon icon="star" color={state === 'entering' ? "#b58900" : "#000000"} onClick={this.handleFavClick} />)
                (<FontAwesomeIcon icon="star" color="#b58900" onClick={this.handleFavClick} />)
                : (<FontAwesomeIcon icon={['far', 'star']} onClick={this.handleFavClick} />)
            }
          </Transition>
        }

        {/* {
          this.props.tweet.favorited
          ? (<FontAwesomeIcon icon="star" color="#b58900" onClick={this.handleFavClick} />)
          : (<FontAwesomeIcon icon={['far', 'star']} onClick={this.handleFavClick} />)
        } */}
      </div>
    )
  }
}




export default Favorite;
