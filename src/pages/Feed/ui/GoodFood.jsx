import React, { Component } from 'react'
import { GoodFoodContainer } from '../style'

import BetterScroll from 'better-scroll'


class GoodFood extends Component {

  constructor (props) {
    super(props)
    this.handleDetail = this.handleDetail.bind(this)
  }

  getData = () => {
    this.props.getData()
  }

  handleDetail (e) {
    const id = e.target.getAttribute('id')
    console.log(id)
    console.log(this.props)
    this.props.history.push(`/detail/${ id }`)
  }

  componentDidMount() {
    // 对 betterscroll 进行初始设置
    this.bs = new BetterScroll('.wrapper', { pullUpLoad: true, click: true })
    this.bs.on('pullingUp', () => {
      console.log('进行网络请求')
      this.props.getData()
      this.bs.finishPullUp()
    })
  }

  componentDidUpdate (prevProps, prevState) {
    // 只有当有数据时, 才会重新计算
    if (this.props.data.length > 0) {
      setTimeout(() => {
        this.bs.refresh()
        // 向上设置为复数
        this.bs.scrollBy(0, -100)
      }, 1000)
    }
  }

  render() {
    return (
      <GoodFoodContainer>
        <h1>精品好菜</h1>
        <div className='wrapper'>
          <div className='content'>
            {this.props.data.map((item, index) => (
              <dl key={index}>
                <dt>
                  <img
                  id={item.id}
                  src={item.img}
                  onClick={ this.handleDetail } />
                </dt>
                <dd>
                  <h3>{item.name}</h3>
                  <p>1000浏览 2000收藏</p>
                </dd>
              </dl>
            ))}
          </div>
        </div>
      </GoodFoodContainer>
    )
  }
}

export default GoodFood
