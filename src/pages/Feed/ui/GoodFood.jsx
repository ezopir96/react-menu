import React, { Component } from 'react'
import { GoodFoodContainer } from '../style'

import BetterScroll from 'better-scroll'

class GoodFood extends Component {

  getData = () => {
    this.props.getData()
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
                  src={item.img}
                  onClick={() => {
                    console.log('点击商品')
                  }} />
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
