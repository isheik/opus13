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


class Reply extends React.Component {
  handleRetweetClick = () => {
    // console.log('comment');
    this.props.editReply(this.props.tweet);
    // this.props.toggleFavorited(this.props.tweet);
  }
  render() {
    return (
      <div className="tweet-item-icon">
        <FontAwesomeIcon icon="comment" onClick={this.handleRetweetClick} />
      </div>
    );
  }
}

// {
//   this.props.tweet.retweeted
//     ? <FontAwesomeIcon icon="retweet" color="#859900" onClick={this.handleRetweetClick} />
//     : <FontAwesomeIcon icon="retweet" onClick={this.handleRetweetClick} />
// }



export default Reply;
