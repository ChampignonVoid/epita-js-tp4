import React from 'react';
import { connect } from 'react-redux';

import TweetForm from './tweetForm'

const mapStateToProps = ({ tweetsList }) => {
    return {
        tweetsList: tweetsList
    }
}

const TweetsList = ({ tweetsList = []} ) => {
    const { tweets } = tweetsList
    return  <div>
                <div>
                    {tweets.map((tweet) => <p key={tweet.id}>{tweet.content}</p>)}
                </div>
                <TweetForm/>
            </div>
}

export default connect(mapStateToProps)(TweetsList)