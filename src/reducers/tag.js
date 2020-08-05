import axios from 'axios'

const types = {
    START_GET_TAGS: 'START_GET_TAGS',
    SUCCESS_GET_TAGS: 'SUCCESS_GET_TAGS',
    FAILURE_GET_TAGS: 'FAILURE_GET_TAGS'
}

const initState = {
    tags: [],
    status: '',
    count: 0
}

const startGetTags = data => ({
    type: types.START_GET_TAGS,
    payload: data
})

const successGetTags = data => ({
    type: types.SUCCESS_GET_TAGS,
    payload: data
})

const failureGetTags = () => ({
    type: types.FAILURE_GET_TAGS
})

export default (state = initState, action) => {
    switch(action.type) {
        case types.START_GET_TAGS:
            return {
                ...state,
                status: 'pending'
            }
        case types.SUCCESS_GET_TAGS:
            return {
                ...state,
                status: 'success',
                tags: action.payload.data
            }
        case types.FAILURE_GET_TAGS:
            return {
                ...state,
                status: 'failure'                
            }
        default:
            return state
    }
}

export const getTagList = () => dispatch => {
    dispatch(startGetTags())
    axios.get('/admin/api/tags').then(({data}) => {                
        dispatch(successGetTags(data))
    }).catch(() => {
        dispatch(failureGetTags())
    })
}
