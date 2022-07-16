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
      return state.set('uid', +sessionStorage.getItem('uid'))
        .set('token', sessionStorage.getItem('token'))
        .set('likes_id', JSON.parse(sessionStorage.getItem('likes_id')))
    } else {
      this.setStorage(data)
      console.log(data)
      return state.set('uid', data.uid).set('token', data.token).set('likes_id', data.likes_id)
    }
  },
  likeFood(state, data) {
    console.log(!data)
    if (!data) {
      return state.set('likes_id', JSON.parse(sessionStorage.getItem('likes_id')))
    } else {
      const list = data.list[0].likes_id
      sessionStorage.setItem('likes_id', JSON.stringify(list))
      return state.set('likes_id', list)
    }
  },
  unlikeFood(state, data) {
    console.log(data)
    if (!data) {
      return state.set('likes_id', JSON.parse(sessionStorage.getItem('likes_id')))
    } else {
      const list = data.list[0].likes_id
      sessionStorage.setItem('likes_id', JSON.stringify(list))
      return state.set('likes_id', list)
    }
  },
  setStorage(data) {
    console.log(data)
    sessionStorage.setItem('uid', data.uid)
    sessionStorage.setItem('token', data.token)
    sessionStorage.setItem('likes_id', JSON.stringify(data.likes_id))
  },
  setUrl(state, data) {
    return state.set('url', data)
  }
}