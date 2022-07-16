import { post } from '@/utils/http'
import config from '@/config/api/loginConfig'

export const doLoginApi = userData => post(config.login, userData)
export const likeFoodApi = likeData => post(config.like, likeData)
export const unlikeFoodApi = unlikeData => post(config.unlike, unlikeData)
