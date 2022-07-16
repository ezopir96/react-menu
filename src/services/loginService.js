import { post } from '@/utils/http'
import config from '@/config/api/loginConfig'

export const doLoginApi = userData => post(config.login, userData)