import React, { Component } from 'react'
import { GoodFoodContainer } from '../style'

class GoodFood extends Component {
  render() {
    return (
      <GoodFoodContainer>
        <h1>精品好菜</h1>
        <div>
          {this.props.data.map((item, index) => (
            <dl key={index}>
              <dt>
                <img src={item.img} />
              </dt>
              <dd>
                <h3>{item.name}</h3>
                <p>1000浏览 2000收藏</p>
              </dd>
            </dl>
          ))}
        </div>
      </GoodFoodContainer>
    )
  }
}

export default GoodFood
