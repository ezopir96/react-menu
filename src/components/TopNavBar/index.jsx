import React, { Component } from 'react'
import { ContainerNav } from './style'
// 解构出来对应的类型
import { string, func, element, oneOfType } from 'prop-types'

class TopNavBar extends Component {
  render() {
    // 解构赋值
    const { children, leftText, rightText, onLeft, onRight } = this.props
    return (
      <ContainerNav>
        <div onClick={onLeft}>{leftText}</div>
        <div>{children}</div>
        <div onClick={onRight}>{rightText}</div>
      </ContainerNav>
    )
  }
}

// props类型限制
TopNavBar.propTypes = {
  children: oneOfType([string, element]),
  leftText: string,
  rightText: string,
  onLeft: func,
  onRight: func
}

// props设置默认值
TopNavBar.defaultProps = {
  // children: '导航',
  leftText: '',
  onLeft: e => {},
  rightText: '',
  onRight: e => {}
}

export default TopNavBar
