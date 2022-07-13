/**
 * 获取分类数据
 */
// 引入接口请求方法
import { getCdataApi } from '@/services/cateService'

const actionCreatorSetCdata = data => ({ type: 'setCdata', data })
export const getCdataAction = () => async dispatch => {
  const data = await (await getCdataApi()).data
  dispatch(actionCreatorSetCdata(data))
}