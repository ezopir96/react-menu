import React, { Component } from 'react'
import { ContentContainer } from '../style'

class Content extends Component {
  onChange = currentIndexName => {
    this.props.setCurrentIndexName(currentIndexName)
  }
  render () {
    let { data, topCurrentIndex, currentIndexName } = this.props
    return (
      <ContentContainer>
        <div>
          <ul>
            {Object.keys(data).map((item, index) => (
              <li onClick={() => this.onChange(item) } key={index} className={item === currentIndexName ? 'active' : ''}>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <ul>
            {data[currentIndexName].map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </ContentContainer>
    )
  }
}
export default Content