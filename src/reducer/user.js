import { fromJS } from 'immutable'
import mutation from '@/mutation/userMutation'

const initState = fromJS({
  uid: 0,
  token: '',
  url: '/'
})

const reducer = (state = initState, { type, data }) => {
  try {
    return mutation[type](state, data)
  } catch(err) {
    return state
  }
}

export default reducer
