import { fromJS } from 'immutable'

export default {
  setCdata(state, data) {
    return state.set('cdata', fromJS(data))
  }
}
