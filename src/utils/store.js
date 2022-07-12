class Store {
  /**
   * 设置值
   * @param {string} key 存储的key值
   * @param {any} value 任意类型，除null和undefined
   */

  set(key, value) {
    if (typeof value === 'object') {
      value = JSON.stringify(value)
    }
    localStorage.setItem(key, value)
  }

  get(key, defaultValue = '') {
    let value = localStorage.getItem(key)
    // 值为存在
    if (value) {
      // 是否为对象字符串(json)
      if (/^\[\{]/.test(value)) {
        // 返回解析 json 后的对象
        return JSON.parse(value)
      }
      return value
    }
    return defaultValue
  }

  remove (key) {
    localStorage.removeItem(key)
  }
}

export default new Store()