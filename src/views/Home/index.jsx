import React from 'react'

import PageFooterNav from '@/components/PageFooterNav'
class Home extends React.Component {
  render () {
    return (
      <>
        <div>
          <PageFooterNav { ...this.props } />
        </div>
      </>
    )
  }
}
export default Home