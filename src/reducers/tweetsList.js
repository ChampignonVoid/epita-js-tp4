import { ADD_TWEET, REMOVE_TWEET } from '../constants'

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
    }
    return state
}

export default tweetsList;