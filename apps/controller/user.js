const User = require("../model/user")

const jwt = require("jsonwebtoken")
const util = require("util")
const verify = util.promisify(jwt.verify)
// 获取用户信息列表
exports.getUserList = async (ctx, next) => {
  let params = ctx.request.body
  try {
    console.log(ctx.headers)
    const token = ctx.headers.token
    if (token) {
      let payload
      try {
        // token 验证
        payload = await verify(token, "token")
        console.log(payload)
        ctx.body = {
          payload
        }
      } catch (error) {}
    } else {
      ctx.body = {
        message: "token 错误",
        code: -1
      }
    }
    let list = await User.find(params).exec()
    let respon = {
      code: "0",
      message: "success",
      data: list
    }
    return respon
  } catch (err) {
    let respon = {
      code: "1",
      message: "error",
      data: err
    }
    return respon
  }
}

// 保存用户信息
exports.saveUser = async (ctx, next) => {
  try {
    let params = ctx.request.body
    const user = new User(params)
    await user.save()
    let list = await User.find().exec()
    let respon = {
      code: "0",
      message: "success",
      data: list
    }
    return respon
  } catch (err) {
    let respon = {
      code: "1",
      message: "error",
      data: err
    }
    return respon
  }
}
