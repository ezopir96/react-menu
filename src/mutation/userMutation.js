import { fromJS } from "immutable";

export default {
  /**
   * 
   * @param {fromJS} state 
   * @param {*} data 
   * @returns 
   */
  login(state, data) {
    console.log(data)
    if (!data) {
      return state.set('uid', +sessionStorage.getItem('uid')).set('token')
    } else {
      this.setStorage(data)
      console.log(data)
      return state.set('uid', data.uid).set('token', data.token)
    }
  },
  setStorage(data) {
    console.log(data)
    sessionStorage.setItem('uid', data.uid)
    sessionStorage.setItem('token', data.token)
  },
  setUrl(state, data) {
    return state.set('url', data)
  }
}