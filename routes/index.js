const router = require('koa-router')()

const ModelDb = require('../db')

router.get('/', async (ctx, next) => {
  // let data = await ModelDb.query()
  // console.log('数据', data)
  await ctx.render('index', {
    title: 'Hello Koa 2!'
  })
})

router.get('/string', async (ctx, next) => {
  ctx.body = 'koa2 string'
})

router.get('/json', async (ctx, next) => {
  ctx.body = {
    title: 'koa2 json'
  }
})

module.exports = router
