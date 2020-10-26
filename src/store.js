import React from 'react'
import ReactDom from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import App from './App'
import indexReducer from './Reducers/index.js'
import logger from 'redux-logger'

let store = createStore(indexReducer, applyMiddleware(logger))

function MyStore() {
    return (
        <Provider store={store}>
            <App />
        </Provider>
    )
}


export default MyStore;