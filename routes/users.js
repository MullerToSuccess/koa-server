const router = require("koa-router")()

// import { getUserList } from "../apps/controller/user"

const {getUserList, saveUser, updateUser, deleteUser}  = require("../apps/controller/user")
router.prefix("/users") // 前缀


// 用户相关接口路由
router.post('/getUser', async (ctx, next) => {
  ctx.body = await getUserList(ctx, next)
})

// 存储用户信息
router.post('/saveUser', async (ctx, next) => {
  ctx.body = await saveUser(ctx, next)
})

// 更新用户信息
router.post('/updateUser', async (ctx, next) => {
  ctx.body = await updateUser(ctx, next)
})

// 删除用户
router.post('/deleteUser', async (ctx, next) => {
  ctx.body = await deleteUser(ctx, next)
})
module.exports = router
