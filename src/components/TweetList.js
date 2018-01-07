import React from 'react';
import TweetItem from './TweetItem';

const TweetList = () => (
    <div>
        {this.props.tweets.map((tweet, index) => <TweetItem key={index} tweet={tweet} />)}
    </div>
);

export default TweetList;