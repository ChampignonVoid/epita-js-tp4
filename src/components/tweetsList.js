import React from 'react'
import { connect } from 'react-redux'

import TweetForm from './tweetForm'

import { addTweet, removeTweet } from './../actions'

const tweet_content_style = {
    margin: "10px",
}

const mapStateToProps = ({ tweetsList }) => {
    return {
        tweetsList: tweetsList
    }
}

const TweetsList = ({ tweetsList = [], dispatch}) => {
    const { tweets } = tweetsList

    return  <div>
                <div>
                    {tweets.map((tweet, index) =>
                        <div key={"tweet_container_" + tweet.id}>
                            <span style={tweet_content_style}>{tweet.content}</span>
                            <button key={"del_btn_" + tweet.id} onClick={() => dispatch(removeTweet(index))}>X</button>
                        </div>)
                    }
                </div>
                <TweetForm actionSubmit={content => dispatch(addTweet(content))}/>
            </div>
}

export default connect(mapStateToProps)(TweetsList)