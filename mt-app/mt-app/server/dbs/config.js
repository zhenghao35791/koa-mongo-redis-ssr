// 通过设置get设置只读
export default {
  dbs: 'mongodb://127.0.0.1:27017/student',
  redis: {
    get host () {
      return '127.0.0.1'
    },
    get port () {
      return 6379
    }
  },
  smtp: {
    get host () {
      return 'smtp.qq.com'
    },
    get user () {
      return 'karthuslorin@foxmail.com'
    },
    get pass () {
      return 'cpvftdpwvuljbidh'
    },
    // 验证码
    get code () {
      return () => {
        return Math.random().toString(16).slice(2, 6).toUpperCase()
      }
    },
    // 过期时间
    get expire () {
      return () => {
        return new Date().getTime() + 60 * 1000
      }
    }
  }
}
