import React, { Component } from 'react'
import { TopnavContainer } from '../style'

class Topnav extends Component {
  onChange = currentIndex => () => this.props.setTopCurrentIndex(currentIndex)
  render () {
    const { index: currentIndex } = this.props
    return (
      <TopnavContainer>
        <ul>
          <li onClick={this.onChange(0)} className={currentIndex === 0 ? 'active' : ''}>
            分类
          </li>
          <li onClick={this.onChange(1)} className={currentIndex === 1 ? 'active' : ''}>
            食材
          </li>
          <li className={currentIndex === 0 ? 'slider' : 'slider right'}></li>
        </ul>
      </TopnavContainer>
    )
  }
}
export default Topnav