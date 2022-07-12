import React, { Component } from 'react'
import { Carousel } from 'antd-mobile'
import { number } from 'prop-types'
import { Link } from 'react-router-dom'

class Swiper extends Component {
  render() {
    return (
      <>
        <Carousel autoplay={false} infinite>
          {/* 条件渲染判断 */}
          {this.props.data &&
            this.props.data.map(val => (
              <Link
                key={val.id}
                style={{ display: 'inline-block', width: '100%', height: this.props.imgH }}
                to={`/detail/${val.id}`}
              >
                <img
                  src={val.img}
                  alt=""
                  style={{ width: '100%', height: this.props.imgH + 'px', verticalAlign: 'top' }}
                />
              </Link>
            ))}
        </Carousel>
      </>
    )
  }
}

Swiper.propTypes = {
  imgH: number
}

Swiper.defaultProps = {
  imgH: 176
}

export default Swiper
