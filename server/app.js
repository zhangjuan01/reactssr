import React from "react"
import routes from './router'
import templating from "./templating";

const Koa = require('koa')
const app = new Koa()

app.use(templating)
app.use(routes.routes(), routes.allowedMethods())
// const App = () => <div>Hello Koa SSR</div>
// app.use(ctx => {
//     ctx.body = renderToString(<App/>)
// })

app.listen(9000, () => {
    console.log('node服务已经启动，请访问localhost:9000')
})