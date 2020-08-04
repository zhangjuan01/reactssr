import home from './home'
import list from './list'
import {combineReducers} from 'redux'

// 合并reducer
export default combineReducers({
    home,
    list,
})