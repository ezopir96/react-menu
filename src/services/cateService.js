import { get } from '@/utils/http'
import config from '@/config/api/cateConfig'

export const getCdataApi = () => get(config.cdata)
