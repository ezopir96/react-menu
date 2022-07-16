import { doLoginApi } from '@/services/loginService'

const actionCreatorLogin = data => ({ type: 'login', data })
export const doLoginAction = (userData) => async dispatch => {
  const ret = await doLoginApi(userData)
  console.log(ret)
  dispatch(actionCreatorLogin(ret.data))
  return ret.code
}

export const setToUrlAction = url => ({ type: 'setUrl', data: url })