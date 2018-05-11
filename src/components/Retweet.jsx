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


class Retweet extends React.Component {
  handleRetweetClick = () => {
    console.log('test');
    // this.props.toggleFavorited(this.props.tweet);
  }
  render() {
    return (
      <div>
        {this.props.tweet.retweeted
          ? (<FontAwesomeIcon icon="retweet" color="#b58900" onClick={this.handleRetweetClick} />)
          : (<FontAwesomeIcon icon="retweet" onClick={this.handleRetweetClick} />)
        }
      </div>
    );
  }
}




export default Retweet;
