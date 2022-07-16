import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import store from '@/store'

const CheckLoginHoc = Cmp => {
  return class extends Component {
    render() {
      if (!store.getState().getIn(['user', 'token'])) {
        return <Redirect to="/Login" />
      }
      return <Cmp { ...this.props } />
    }
  }
}

export default CheckLoginHoc