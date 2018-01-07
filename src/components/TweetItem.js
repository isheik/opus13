import React from 'react';

const TweetItem = (props) => (
    <div>
        {console.log(props)}
        {props.tweet.text}
    </div>
);

export default TweetItem;