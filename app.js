const Koa = require('koa')
const app = new Koa()
const views = require('koa-views')
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')
const cors = require('koa2-cors');
const koaJwt = require('koa-jwt')

const index = require('./routes/index')
const users = require('./routes/users')
const login = require('./routes/login')




// error handler
onerror(app)

// middlewares
app.use(bodyparser({
  enableTypes:['json', 'form', 'text']
}))
app.use(json())
app.use(logger())
app.use(cors()) // 跨域
app.use(require('koa-static')(__dirname + '/public'))

app.use(views(__dirname + '/views', {
  extension: 'pug'
}))


// routes
app.use(index.routes(), index.allowedMethods())
app.use(users.routes(), users.allowedMethods())
app.use(login.routes(), login.allowedMethods())

// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
  if(err.status === 401){
    ctx.status = 401
    ctx.body = 'Protected resource, use Authorization header to get access\n';
  }else{
    throw err
  }
 // jwt 验证
  app.use(koaJwt({
    secret: 'token'
  }).unless({
    path: [/\/login\/login/]
  }))
});

module.exports = app
