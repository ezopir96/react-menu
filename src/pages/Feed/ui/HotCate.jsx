import React, { Component } from 'react'
import { Grid } from 'antd-mobile'
import { HotCateContainer } from '../style'

// const data = Array.from(new Array(9)).map((_val, i) => ({
//   icon: 'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png',
//   text: `name${i}`
// }))

class HotCate extends Component {
  render() {
    return (
      <HotCateContainer>
        <div className="title">热门分类</div>
        <Grid
          data={this.props.data}
          columnNum={4}
          itemStyle={{ height: '.5rem' }}
          renderItem={({ title }) => <div onClick={() => console.log(title)}>{title}</div>}
        />
      </HotCateContainer>
    )
  }
}

export default HotCate
