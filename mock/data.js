// 此文件是运行在nodejs环境 commonjs
const Mock = require('mockjs')

// let users = []
// for (let i = 1; i <= 10; i++) {
//   users.push({
//     id: i,
//     name: Mock.mock('@cname'),
//     age: i + 10
//   })
// }

// /* module.exports = () => {
//   return { users }
// } */

// module.exports = () => ({ users })

const users = Mock.mock({
  // 生成10条记录数据
  'users|10': [
    {
      'id|+1': 1,
      name: '@cname',
      'age|1-200': 20
    }
  ]
})

module.exports = () => ({ users })
