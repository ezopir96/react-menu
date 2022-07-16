import React from 'react'
import { DetailContainer } from '../style'

class Content extends React.Component {

  constructor(props) {
    super(props)
  }

  render () {
    const { data } = this.props
    return (
      <DetailContainer>
        <img className='food_img' src={ data.img } alt="" />
        <h1>{ data.name }</h1>
        {/* 从映射到属性中的 likes_id 列表中比较 === 主页传来的属性中的 lid */}
        { this.props.likes_id.find(item => (item === this.props.lid)) ? <button onClick={ this.props.unlikeFood }>取消收藏</button> : <button onClick={ this.props.likeFood }>点击收藏</button>  }
      </DetailContainer>
    )
  }
}
export default Content