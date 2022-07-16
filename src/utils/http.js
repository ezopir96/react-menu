import axios from 'axios'

const instance = axios.create({
  timeout: 10000
})

instance.interceptors.response.use(
  res => res.data,
  err => Promise.reject(err)
)

// 封装请求方法
// - restFulApi
// - get 获取数据 200
// - post 添加数据 201

// 封装 get
export const get = (url, config = {}) => instance.get(url, config)

// 封装 post
export const post = (url, data ={}, config = {}) => {
  if ({}.toString.call(data) !== '[object Object]') {
    throw new Error('类型不合法')
  }
  return instance.post(url, data, config)
}

export const post2 = (url, data, config) => {
  return fetch(url, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'content-type': 'application/json'
    }
  })
    .then(result => result.json())
    .then(data => data)
}

export const post4 = async (url, data, config) => {
  return await (await fetch(url, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'content-type': 'application/json'
    }
  })).json()
}