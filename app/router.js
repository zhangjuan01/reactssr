import React from 'react'
import {Link, Switch, Route} from 'react-router-dom'

const Home = () => (
    <div>
        <h1>首页</h1>
        <Link to='/list'>跳转列表页</Link>
    </div>
)
const list = ['react真好玩儿', 'koa有点意思', 'ssr更有意思']

const List = () => (
    <ul>
        {list.map((item, index) => <li key={index}>{item}</li>)}
    </ul>
)
export default () => (
    <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/list' component={List}/>
    </Switch>
)

