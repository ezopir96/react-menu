import { doLoginApi, likeFoodApi, unlikeFoodApi } from '@/services/loginService'

const actionCreatorLogin = data => ({ type: 'login', data })
export const doLoginAction = (userData) => async dispatch => {
  const ret = await doLoginApi(userData)
  console.log(ret)
  dispatch(actionCreatorLogin(ret.data))
  return ret.code
}

const actionLikeFood = data => ({ type: 'likeFood', data })
export const likeFoodAction = (likeData) => async dispatch => {

  // 有可能请求失败，服务器刷新有延迟
  try {
    var ret = await likeFoodApi(likeData)
    if (ret.data) dispatch(actionLikeFood(ret.data))
    return ret.code
  } catch(err) {
    console.log(err)
  }
}

const actionUnlikeFood = data => ({ type: 'unlikeFood', data })
export const unlikeFoodAction = (unlikeData) => async dispatch => {

  try {
    var ret = await unlikeFoodApi(unlikeData)
    dispatch(actionUnlikeFood(ret.data))
    return ret.code
  } catch(err) {
    console.log(err)
  }

  // const ret = await unlikeFoodApi(unlikeData)
  // dispatch(actionUnlikeFood(ret.data))
}

export const setToUrlAction = url => ({ type: 'setUrl', data: url })