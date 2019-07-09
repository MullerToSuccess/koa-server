const router = require("koa-router")()

const { login, sign } = require("../apps/controller/login")
// 登录
router.post("/login/login", async (ctx, next) => {
  ctx.body = await login(ctx, next)
})
// 注册
router.post("/login/sign", async (ctx, next) => {
  ctx.body = await sign(ctx, next)
})

module.exports = router
