import { fromJS } from 'immutable'
import mutation from '@/mutation/cateMutation'

const initState = fromJS({
  cdata: {
    category: null,
    material: null
  }
})

const reducer = (state = initState, { type, data }) => {
  try {
    return mutation[type](state, data)
  } catch (error) {
    return state
  }
}

export default reducer
