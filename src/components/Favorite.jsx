import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

const Favorite = props => (
  <div>
    {
      console.log(props)}
    {props.favorited
      ? (<FontAwesomeIcon icon="star" color="yellow" />)
      : (<FontAwesomeIcon icon={['far', 'star']} />)
    }
  </div>
);

export default Favorite;
