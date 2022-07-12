import { fromJS } from 'immutable'

export default {
  setSwiper(state, data) {
    return state.set('swiper', fromJS(data))
  },
  setHotCate(state, data) {
    return state.set('hotcate', fromJS(data))
  },
  setGoodFood(state,data){
    return state.set('goodfood', fromJS(data))
  }
}