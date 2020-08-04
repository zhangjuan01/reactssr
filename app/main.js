import React from 'react';
import { render } from 'react-dom';
import './style/index.less'
import logo from './static/logo.png'
import {BrowserRouter} from 'react-router-dom'
import Router from './router'
import {Provider} from 'react-redux'
import createStore from './redux/store/index'

const store = createStore()
function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Router/>
            </BrowserRouter>
        </Provider>
        )
}

render(<App/>, document.getElementById('app'))
