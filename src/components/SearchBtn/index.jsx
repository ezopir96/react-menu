import React, { Component } from 'react'

// cssModule css样式模块，它就有了css样式作用域
import style from './style.module.scss'

class SearchBtn extends Component {
  render() {
    return (
      <div className={style.container} onClick={(evt,id = 1000) => this.props.onClick(id)}>
        <img src="http://img.1314000.cn/icon/search.png" alt="" />
        <div>{this.props.title}</div>
      </div>
    )
  }
}

SearchBtn.defaultProps = {
  title: '菜系',
  onClick: arg => {}
}

export default SearchBtn