import React, { Component, Suspense, lazy } from 'react'
import { Route, NavLink, Switch } from 'react-router-dom'

// 路由拆分和懒加载
// import如果把它当作函数来使用，它会把js进行拆分

const Home = lazy(() => import('@/views/Home'))
const Detail = lazy(() => import('@/views/Detail'))
const Login = lazy(() => import('@/views/Login'))
const Search = lazy(() => import('@/views/Search'))

class Routes extends React.Component {
  render () {
    return (
      <>
      {/* 懒加载 */}
        <Suspense fallback={ <div>loading...</div> }>
          <Switch>
            <Route path={'/detail/:id'} component={Detail}></Route>
            <Route path={'/login'} component={Login}></Route>
            <Route path={'/search'} component={Search}></Route>
            <Route path={'/'} component={Home}></Route>
          </Switch>
        </Suspense>
      </>
    )
  }
}
export default Routes