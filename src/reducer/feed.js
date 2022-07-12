import { fromJS } from 'immutable'
import mutation from '@/mutation/feedMutation'

// 初始化数据
const initState = fromJS({
  swiper: [],
  hotcate: [],
  goodfood: []
})

const reducer = (state = initState, { type, data }) => {
  try {
    return mutation[type](state, data)
  } catch (error) {
    return state
  }
}

export default reducer
