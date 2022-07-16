import { get } from '@/utils/http'
import config from '@/config/api/feedConfig'

/**
 * 幻灯片数据
 * @returns Promise
 */
export const getSwiperListApi = () => get(config.swiper)

/**
 * 热门分类
 * @returns Promise
 */
export const getHotCateListApi = () => get(config.hotcate)

/**
 * 精品列表
 * @param {number} limit 取的数据条数 默认为2
 * @returns Promise
 */
export const getGoodFoodListApi = async (limit = 2) => {
  let { data } = await get(config.goodfood)
  return { data: data.slice(0, limit) }
}

export const getGoodFoodDetailApi = async (id = '') => {
  let { data } = await get(config.goodfood)
  return { data: data.find(item => (item.id === id)) }
}
