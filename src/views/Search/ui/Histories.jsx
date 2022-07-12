import React from 'react'
class Histories extends React.Component {

  cleanData = () => {
    this.props.cleanData()
  }

  render () {
    return (
      <div>
        <div>
          <span>最近搜索</span> ---
          <span onClick={this.cleanData}>清空</span>
        </div>
        <ul>
          {this.props.data.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    )
  }
}
export default Histories