import React from 'react'
import { connect } from 'react-redux'

import TweetForm from './tweetForm'

import { addTweet, removeTweet, updateTweet } from './../actions'

const tweet_content_style = {
    margin: "10px",
}

const askNewContent = (dispatch, tweet) => {
    const content = prompt("New tweet content ?")
    if (content) {
        dispatch(updateTweet({ new_content: content, tweet: tweet}))
    }
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
                            <button key={"edit_btn_" + tweet.id} onClick={() => askNewContent(dispatch, tweet)}>Update</button>
                        </div>)
                    }
                </div>
                <TweetForm actionSubmit={content => dispatch(addTweet(content))}/>
            </div>
}

export default connect(mapStateToProps)(TweetsList)