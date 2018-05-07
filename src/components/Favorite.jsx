import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

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
      <div>
        {
          console.log(this.props)}
        {this.props.tweet.favorited
          ? (<FontAwesomeIcon icon="star" color="#b58900" onClick={this.handleFavClick} />)
          : (<FontAwesomeIcon icon={['far', 'star']} onClick={this.handleFavClick} />)
        }
      </div>
    )
  }
}




export default Favorite;
