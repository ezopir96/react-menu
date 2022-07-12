import React, { Component } from 'react'

import TopNavBar from '@/components/TopNavBar'
import Swiper from '@/components/Swiper'
import { Toast } from 'antd-mobile'

import { getSwiperListApi } from '@/services/feedService'
import SearchBtn from '@/components/SearchBtn'
import HotCate from './ui/HotCate'

import connect from './connect'
import GoodFood from './ui/GoodFood'

@connect
class Feed extends React.Component {

  state = {
    page: 1
  }

  componentDidMount() {
    console.log(this.props)
    Promise.all([
      this.props.swiper.length === 0 && getSwiperListApi(),
      this.props.hotcate.length === 0 && this.props.getHotCateListAction(),
      this.props.goodfood.length === 0 && this.props.getGoodFoodListAction(10)
    ]).catch(err => err)
  }

  getData = async () => {
    let len = await this.props.getGoodFoodListAction(this.state.page, 10)
    if (len > 0) {
      this.setState(state => ({ page: state.page + 1 }))
    } else {
      Toast.info('没有更多了', 3)
    }
  }

  render () {
    return (
      <div>
        {/* 顶部导航 */}
        <TopNavBar leftText="返回" onLeft={e => console.log(1000, e)}>
          菜谱大全
        </TopNavBar>
        {/* 幻灯片 */}
        <Swiper data={this.props.swiper} />
        {/* 搜索按钮 */}
        <SearchBtn
          onClick={id => {
            this.props.history.push('/search')
          }}
          title="想吃什么搜索这里：如徽菜"
        />
        {/* 热门分类 */}
        <HotCate data={this.props.hotcate} />
        {/* 精品好菜 */}
        <GoodFood data={this.props.goodfood} getData={this.getData} />
      </div>
    )
  }
}
export default Feed
