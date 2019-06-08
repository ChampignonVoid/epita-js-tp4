import { ADD_TWEET } from '../constants'

const initialState = {
    tweets: []
}
const tweetsList = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TWEET:
            return Object.assign({}, state, {
                tweets: state.tweets.concat(action.payload)
            })
    }
    return state
}

export default tweetsList;