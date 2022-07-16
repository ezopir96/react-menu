import React from 'react'
import { Route, NavLink } from 'react-router-dom'
import { List, InputItem, Toast, Button } from 'antd-mobile'
import TopNavBar from '@/components/TopNavBar'
import connect from './connect'

@connect
class Login extends React.Component {
  constructor(props) {
    super(props)
    if (this.props.token) {
      this.props.history.replace('/')
    }
  }

  state = {
    username: '',
    usernameHasError: false,
    password: '',
    passwordHasError: false
  }
  errorMsg = {
    username: '账号不合法',
    password: '密码不合法'
  }
  onErrorClick = key => {
    if (this.state[key + 'HasError']) {
      Toast.info(this.errorMsg[key], 3)
    }
  }

  validateInput = (value, name) => {
    this[name + 'Validate'](value)
  }

  usernameValidate(value) {
    if (/^z/.test(value)) {
      this.setState({
        usernameHasError: true
      })
    } else {
      this.setState({
        usernameHasError: false
      })
    }
  }

  passwordValidate(value) {
    if (/^0/.test(value)) {
      this.setState({
        passwordHasError: true
      })
    } else {
      this.setState({
        passwordHasError: false
      })
    }
  }

  onChange(value, name) {
    // 表单验证
    this.validateInput(value, name)

    // 修改登录相关状态 (数组关联语法)
    this.setState({
      [name]: value
    })
  }

  doLogin = async () => {
    let bool = Object.keys(this.state)
      .filter(item => /HasError$/.test(item))
      .some(item => this.state[item])
    if (bool) {
      Toast.info('表单填写不完善', 3)
      return
    }
    let { username, password } = this.state
    let code = await this.props.doLoginAction({ username, password })
    if (code === 0) {
      Toast.success('登录成功', 2, () => {
        this.props.history.replace(this.props.url)
      })
    } else {
      Toast.fail('登录异常', 3)
    }
  }

  render () {
    return (
      <div>
        <TopNavBar>用户登录</TopNavBar>
        <List>
          <InputItem
            type="text"
            placeholder="请输入账号"
            error={this.state.usernameHasError}
            onErrorClick={() => this.onErrorClick('username')}
            onChange={value => this.onChange(value, 'username')}
            value={this.state.username}
          >
            账号：
          </InputItem>
        </List>
        <List>
          <InputItem
            type="text"
            placeholder="请输入密码"
            error={this.state.passwordHasError}
            onErrorClick={() => this.onErrorClick('password')}
            onChange={value => this.onChange(value, 'password')}
            value={this.state.password}
          >
            密码：
          </InputItem>
        </List>
        <List>
          <Button type="primary" onClick={this.doLogin}>
            用户登录
          </Button>
        </List>
      </div>
    )
  }
}
export default Login