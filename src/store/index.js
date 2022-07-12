import { createStore, applyMiddleware } from 'redux'
import { combineReducers } from 'redux-immutable'
import thunk from 'redux-thunk'
import {composeWithDevTools } from '@redux-devtools/extension'

// 参数1：检索的路径  相对路径
// 参数2：是否递归检索
// 参数3：最终需要的文件扩展名 正则
const moduleFn = require.context('../reducer', false, /\.js$/i)

const modules = moduleFn.keys().reduce((prev, curr) => {
  // 获取 ./XXX.js
  const key = curr.match(/\.\/(\w+)\.js$/i)[1]
  const value = moduleFn(curr).default
  prev[key] = value
  return prev
}, {})
const reducer = combineReducers(modules)

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))

export default store
