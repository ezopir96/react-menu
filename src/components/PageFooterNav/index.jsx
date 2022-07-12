import React, { Component } from 'react'
import { TabBar } from 'antd-mobile'
import config from '@/config/footerMenu'
import { Route, NavLink } from 'react-router-dom'
class PageFooterNav extends React.Component {
  constructor (props) {
    super(props)
    // 构造状态
    this.state = {
      selectedTab: 'feed',
      hidden: false
    }
  }
  render () {
    return (
      <>
        <div style={{ position: 'fixed', height: '100%', width: '100%', top: 0 }}>
          <TabBar unselectedTintColor="#949494" tintColor="#000" barTintColor="white" hidden={this.state.hidden}>
            {config.map(({ title, key, icon, selectedIcon, component: Cmp }) => (
              <TabBar.Item
                title={title}
                key={key}
                icon={
                  <div
                    style={{
                      width: '22px',
                      height: '22px',
                      background: `url(${icon}) center center /  21px 21px no-repeat`
                    }}
                  />
                }
                selectedIcon={
                  <div
                    style={{
                      width: '22px',
                      height: '22px',
                      background: `url(${selectedIcon}) center center /  21px 21px no-repeat`
                    }}
                  />
                }
                selected={this.state.selectedTab === key}
                onPress={() => {
                  this.setState({
                    selectedTab: key
                  })
                }}
              >
                {/* <Cmp {...this.props} /> */}
                {/* {Cmp} */}
                {/* 顶层Api */}
                {
                  React.cloneElement(Cmp,{
                    ...this.props
                  })
                }
              </TabBar.Item>
            ))}
          </TabBar>
        </div>
      </>
    )
  }
}
export default PageFooterNav