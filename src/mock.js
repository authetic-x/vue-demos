const Mock = require('mockjs')

const users = [
  {username: 'Ethan', password: '777777'}
]

Mock.mock('/api/login', 'post', (req) => {
  const data = JSON.parse(req.body)
  if (users.some(item => data.username === item.username 
      && data.password === item.password)) {
    return {
      resCode: 0,
      username: data.username
    }
  } else {
    return {
      resCode: -1
    }
  }
})