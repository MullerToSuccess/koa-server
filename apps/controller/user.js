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
        payload = await verify(token, "token")
        ctx.body = {
          payload
        }
        let list = await User.find(params).exec()
        let respon = {
          code: "0",
          message: "success",
          data: list
        }
        return respon
      } catch (error) {
        throw error
      }
    } else {
      ctx.body = {
        message: "token 错误",
        code: -1
      }
    }
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
    let list = await User.find(params).exec()
    // token 校验
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
// 更新用户信息
exports.updateUser = async (ctx, next) => {
  try {
    let params = ctx.request.body
    // const user = new User(params)
    await User.update({userId: params.userId}, params)
    // let list = await User.find(params).exec()
    // token 校验
    let respon = {
      code: "0",
      message: "更新成功"
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

// 删除用户
exports.deleteUser = async (ctx, next) => {
  try {
    let params = ctx.request.body
    await User.deleteOne({userId: params.userId})
    // token 校验
    let respon = {
      code: "0",
      message: "删除成功"
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
