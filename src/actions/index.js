import { ADD_TWEET } from '../constants'

export function addTweet(payload) {
    return {
        type: ADD_TWEET,
        payload
    }
}