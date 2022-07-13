import React, { Component } from 'react';
import Content from './ui/Content'
import Topnav from './ui/Topnav'
import SearchBtn from '@/components/SearchBtn'

import connect from './connect'

class Category extends Component {
  state = {
    topCurrentIndex: 0,
    currentIndexName: ['烘焙', '其他']
  }

  setTopCurrentIndex = topCurrentIndex => this.setState({ topCurrentIndex })

  componentDidMount() {
    this.props.getCdataAction()
  }

  setCurrentIndexName = currentIndexName => {
    this.state.currentIndexName[this.state.topCurrentIndex] = currentIndexName
    this.setState({})
  }

  render() {
    const { topCurrentIndex, currentIndexName } = this.state
    return (
      <div>
        <Topnav index={topCurrentIndex} setTopCurrentIndex={this.setTopCurrentIndex} />
        <SearchBtn onClick={() => this.props.history.push('/search')} />
        {this.props.cdata.category && (
        <Content
          key={'' + topCurrentIndex}
          topCurrentIndex={topCurrentIndex}
          currentIndexName={currentIndexName[topCurrentIndex]}
          setCurrentIndexName={this.setCurrentIndexName}
          data={this.props.cdata[topCurrentIndex === 0 ? 'category' : 'material']}/>)}
      </div>
    );
  }
}

export default connect(Category);
