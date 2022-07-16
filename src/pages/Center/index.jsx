import React, { Component } from 'react';
import TopNavBar from '@/components/TopNavBar';
import { List } from 'antd-mobile'
import connect from './connect'

const Item = List.Item
const Brief = Item.Brief

@connect
class Center extends Component {
  render() {
    return (
      <div>
        <TopNavBar>个人中心</TopNavBar>
        <List>
          <Item
            arrow="horizontal"
            onClick={() => {
              this.props.setToUrlAction('/fav')
              this.props.history.push('/fav')
            }}
          >
            查看收藏
          </Item>
        </List>
        <List>
          <Item
            arrow="horizontal"
            onClick={() => {
              this.props.setToUrlAction('/record')
              this.props.history.push('/record')
            }}
          >
            浏览记录
          </Item>
        </List>
      </div>
    );
  }
}

export default Center;
