const router = require("koa-router")()

// import { getUserList } from "../apps/controller/user"

const {getUserList, saveUser}  = require("../apps/controller/user")
router.prefix("/users") // 前缀


// 用户相关接口路由
router.post('/getUser', async (ctx, next) => {
  ctx.body = await getUserList(ctx, next)
})

// 存储用户信息
router.post('/saveUser', async (ctx, next) => {
  ctx.body = await saveUser(ctx, next)
})

module.exports = router
