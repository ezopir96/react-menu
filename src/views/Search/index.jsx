import React from 'react'
import TopNavBar from '@/components/TopNavBar'
import Form from './ui/Form.jsx'
class Search extends React.Component {
  render () {
    return (
      <div>
        <TopNavBar leftText='返回' onLeft={() => this.props.history.goBack()}>
          搜索
        </TopNavBar>
        <Form />
      </div>
    )
  }
}
export default Search