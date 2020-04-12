import profile from './profile'
import blogList from './blogList'
import blog from './blog'
import {combineReducers} from 'redux'

export default combineReducers({
    profile,
    blogList,
    blog
})