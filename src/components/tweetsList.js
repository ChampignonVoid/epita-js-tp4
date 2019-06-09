import React from 'react';
import { connect } from 'react-redux';

import TweetForm from './tweetForm'

import { addTweet } from './../actions'

const mapStateToProps = ({ tweetsList }) => {
    return {
        tweetsList: tweetsList
    }
}

const TweetsList = ({ tweetsList = [], dispatch}) => {
    const { tweets } = tweetsList

    return  <div>
                <div>
                    {tweets.map((tweet) => <p key={tweet.id}>{tweet.content}</p>)}
                </div>
                <TweetForm actionSubmit={content => dispatch(addTweet(content))}/>
            </div>
}

export default connect(mapStateToProps)(TweetsList)