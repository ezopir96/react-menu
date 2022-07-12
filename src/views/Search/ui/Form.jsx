import React from 'react'
import { SearchBar } from 'antd-mobile'
import Histories from './Histories'
import { FormContainer } from '../style'
import localStorage from '@/utils/store'

import _ from 'lodash'

class Form extends React.Component {

  constructor (props) {
    super(props)
    // 对函数进行节流处理(输入事件)
    this.onChange = _.throttle(this.onChange, 1000)
  }

  state = {
    histoies: localStorage.get('histoies') ? JSON.parse(localStorage.get('histoies')) : []
  }
  
  onSubmit = value => {
    let histoies = this.state.histoies
    histoies.unshift(value)
    this.state.histoies = histoies.slice(0, process.env.REACT_APP_HISTORYLIMT)
    localStorage.set('histoies', JSON.stringify(this.state.histoies))
    // 通知视图更新
    this.setState({})
  }

  cleanData () {
    if (!localStorage.get('histoies')) return
    this.setState({ histoies: [] }, () => {
      localStorage.remove('histoies')
    })
  }

  onChange = value => {
    console.log('节流测试', value)
    // 进行ajax请求，返回数据，更新视图
  }

  render () {
    return (
      <>
        <div>
          <FormContainer>
            <SearchBar placeholder='请输入关键字' maxLength={20} onSubmit={this.onSubmit}></SearchBar>
            <hr />
            {/* data 父子组件通信传递的参数, 同一变量名(如 data ) */}
            <Histories data={this.state.histoies} cleanData={this.cleanData.bind(this)}></Histories>
          </FormContainer>
        </div>
      </>
    )
  }
}
export default Form