import { ADD_TWEET, REMOVE_TWEET } from '../constants'

export function addTweet(payload) {
    return {
        type: ADD_TWEET,
        payload
    }
}

export function removeTweet(payload) {
    return {
        type: REMOVE_TWEET,
        payload
    }
}