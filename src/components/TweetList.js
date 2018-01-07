import React from 'react';
import TweetItem from './TweetItem';

const TweetList = (props) => (
    <div>
        {props.tweets.map((tweet, index) => <TweetItem {...props} key={index} tweet={tweet} />)}
    </div>
);

export default TweetList;