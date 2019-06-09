import { ADD_TWEET, REMOVE_TWEET, UPDATE_TWEET } from '../constants'

const initialState = {
    tweets: []
}

const tweetsList = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TWEET:
            return Object.assign({}, state, {
                tweets: state.tweets.concat(action.payload)
            })
        case REMOVE_TWEET:
            const tweets = [...state.tweets]
            tweets.splice(action.payload, 1)
            return Object.assign({}, state, {
                tweets: tweets
            })
        case UPDATE_TWEET:
            const upTweets = [...state.tweets]
            const index = upTweets.findIndex(tweet => tweet.id === action.payload.tweet.id)
            if (index >= 0) {
                const tweet = upTweets[index]
                tweet.content = action.payload.new_content
                upTweets[index] = tweet
            }
            return Object.assign({}, state, {
                tweets: upTweets
            })
    }
    return state
}

export default tweetsList;