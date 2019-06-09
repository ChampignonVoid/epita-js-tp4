import { ADD_TWEET, REMOVE_TWEET, UPDATE_TWEET } from '../constants'

const generateObject = (type, payload) => {
    return {
        type: type,
        payload: payload
    }
}

export function addTweet(payload) {
    return generateObject(ADD_TWEET, payload)
}

export function removeTweet(payload) {
    return generateObject(REMOVE_TWEET, payload)
}

export function updateTweet(payload) {
    return generateObject(UPDATE_TWEET, payload)
}