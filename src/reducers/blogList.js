import axios from 'axios'

const types = {
    START_GET_BLOG_LIST: 'blogList/START_GET_BLOG_LIST',
    SUCCESS_GET_BLOG_LIST: 'blogList/SUCCESS_GET_BLOG_LIST',
    FAILURE_GET_BLOG_LIST: 'blogList/FAILURE_GET_BLOG_LIST'
}

const initState = {
    blogList: [],
    status: '',
    count: 0
}

const startGetBlogList = () => ({
    type: types.START_GET_BLOG_LIST
})

const successGetBlogList = (data) => ({
    type: types.SUCCESS_GET_BLOG_LIST,
    blogList: data.blogs,
    count: data.count
})

const failureGetBlogList = () => ({
    type: types.FAILURE_GET_BLOG_LIST
})

export default (state = initState, action) => {
    switch(action.type) {
        case types.START_GET_BLOG_LIST:
            return {
                ...state,
                status: 'pending'
            }
        case types.SUCCESS_GET_BLOG_LIST:
            return {
                blogList: action.blogList,
                count: action.count,
                status: 'success'
            }
        case types.FAILURE_GET_BLOG_LIST:
            return {
                ...state,
                status: 'failure'
            }
        default: return state
    }
}

const requestGetBlogList = () => dispatch => {
    dispatch(startGetBlogList())
    return axios.get('/api/blogs').then(res => {
        const data = res.data.data
        dispatch(successGetBlogList(data))
        return 'success'
    }).catch(err => {
        dispatch(failureGetBlogList())
        return 'failure'
    })
}

export {requestGetBlogList}