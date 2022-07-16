import React from 'react'
import TopNavBar from '@/components/TopNavBar'

class Detail extends React.Component {
  render () {
    console.log(this.props)
    const { id } = this.props.match.params
    return (
      <>
        <TopNavBar leftText='返回' onLeft={() => this.props.history.goBack()}>详情信息</TopNavBar>
        <div>Detail</div>
      </>
    )
  }
}
export default Detail