import { getSwiperListApi, getHotCateListApi, getGoodFoodListApi } from '@/services/feedService'

// 先定义后使用
const actionCreatorAddSwiper = data => ({ type: 'setSwiper', data })
export const getSwiperListAction = () => async dispatch => {
  const data = await (await getSwiperListApi()).data
  dispatch(actionCreatorAddSwiper(data))
}

const actionCreatorAddHotcate = data => ({ type: 'setHotCate', data })
export const getHotCateListAction = () => async dispatch => {
  const data = await (await getHotCateListApi()).data
  dispatch(actionCreatorAddHotcate(data))
}

const actionCreatorAddGoodFoodList = data => ({ type: 'setGoodFood', data })
export const getGoodFoodListAction =
  (page = 1, limit = 2) =>
  async dispatch => {
    const data = await (await getGoodFoodListApi(limit)).data
    dispatch(actionCreatorAddGoodFoodList(data))
    return data.length
  }