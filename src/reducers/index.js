import profile from './profile'
import blogList from './blogList'
import blog from './blog'
import tag from './tag'
import app from './app'
import {combineReducers} from 'redux'

export default combineReducers({
    profile,
    blogList,
    blog,
    tag,
    app
})