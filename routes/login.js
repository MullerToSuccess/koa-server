const router = require("koa-router")()

const { login }  = require("../apps/controller/login")
// 登录
router.post('/login', async (ctx, next) => {

    ctx.body = await login(ctx, next)
  })



module.exports = router
