const User = require("../model/user")
const addToken = require("../token/addToken")

// 获取用户信息列表
exports.login = async (ctx, next) => {
  let params = ctx.request.body
  console.log("login", params)
  try {
    let list = await User.find(params).exec()
    let userInfo = list[0]
    console.log(list[0])
    let token = addToken(userInfo)
    let respon = {
      code: "0",
      message: "success",
      data: { user: userInfo, token: token }
    }
    return respon
  } catch (err) {
    let respon = {
      code: "1",
      message: "错误的用户名和密码"
    }
    return respon
  }
}

// 注册用户
exports.sign = async (ctx, next) => {
  let params = ctx.request.body
  try {
    let list = await User.find(params).exec()
    if (list.length) {
      return {
        code: "1",
        message: "已存在用户，请重新输入"
      }
    }
    let user = new User(params)
    const res = await user.save()
    return {
      code: "1",
      message: "注册成功",
      data: res
    }
  } catch {}
}
