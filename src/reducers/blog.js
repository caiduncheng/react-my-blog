import axios from 'axios'

const types = {
    START_GET_BLOG: 'blogList/START_GET_BLOG',
    SUCCESS_GET_BLOG: 'blogList/SUCCESS_GET_BLOG',
    FAILURE_GET_BLOG: 'blogList/FAILURE_GET_BLOG'
}

const initState = {
    status: '',
    data: {}
}

const startGetBlog = () => ({
    type: types.START_GET_BLOG
})

const successGetBlog = blog => ({
    type: types.SUCCESS_GET_BLOG,
    data: blog
})

const failureGetBlog = () => ({
    type: types.FAILURE_GET_BLOG
})



export default (state = initState, action) => {
    switch(action.type) {
        case types.START_GET_BLOG:
            return {
                ...state,
                status: 'pending'
            }
        case types.SUCCESS_GET_BLOG:
            console.log(action)
            return {
                data: action.data,
                status: 'success'
            }
        case types.FAILURE_GET_BLOG:
            return {
                ...state,
                status: 'failure'
            }
        default: return state
    }
}

const requestGetBlog = id => dispatch => {
    dispatch(startGetBlog())
    console.log(id)
    axios.get(`/api/blogs/${id}`).then(res => {
        const blog = res.data.data
        dispatch(successGetBlog(blog))
        return 'success'
    }).catch(err => {
        console.log(err)
        dispatch(failureGetBlog())
        return 'failure'
    })
}

export { requestGetBlog }