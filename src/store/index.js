import { createStore, applyMiddleware } from 'redux'
import { combineReducers } from 'redux-immutable'
import thunk from 'redux-thunk'
import {composeWithDevTools } from '@redux-devtools/extension'

const moduleFn = require.context('../reducer', false, /\.js$/i)

const modules = moduleFn.keys().reduce((prev, curr) => {
  
})

export default store
