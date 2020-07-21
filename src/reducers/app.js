const initState = {
    sideBarOpened: false
}

const types = {
    TOGGLE_SIDE_BAR: 'TOGGLE_SIDE_BAR'
}

export default (state = initState, action) => {
    switch(action.type) {
        case types.TOGGLE_SIDE_BAR:
            return {
                ...state,
                sideBarOpened: action.payload
            }
        default: 
            return state
    }
}