import React from 'react'
import { hot } from 'react-hot-loader'
import { Provider } from 'react-redux'

import TweetList from './components/tweetsList'
import store from './store'

const App = () =>
{
    return  <Provider store={store}>
                <TweetList/>
            </Provider>
}

export default hot(module)(App)