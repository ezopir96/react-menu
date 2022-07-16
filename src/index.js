import React from 'react'
import ReactDom from 'react-dom'
import App from './router'

import { Provider } from 'react-redux'
import store from './store'

// 导入路由第三方
import { BrowserRouter as Router } from 'react-router-dom'

// 设置 redux 中的登录数据
store.dispatch({ type: 'login' })

ReactDom.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
)