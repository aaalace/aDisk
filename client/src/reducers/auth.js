import { 
    REGISTER_SUCCESS, 
    REGISTER_FAIL, 
    LOGIN_SUCCESS, 
    LOGIN_FAIL, 
    LOGOUT_SUCCESS, 
    LOGOUT_FAIL,
    AUTHENTICATED_SUCCESS, 
    AUTHENTICATED_FAIL,
    DELETE_USER_SUCCESS,
    DELETE_USER_FAIL
} from '../actions/types'

const initialState = {
    isAuthenticated: null
}

// eslint-disable-next-line
export default function(state = initialState, action) {
    const { type, payload } = action

    switch(type) {
        case REGISTER_SUCCESS: 
            return {...state, isAuthenticated: false}

        case LOGIN_SUCCESS: 
            return {...state, isAuthenticated: true}
    
        case LOGOUT_SUCCESS: 
        case DELETE_USER_SUCCESS:
            return {...initialState, isAuthenticated: false}

        case REGISTER_FAIL: 
        case LOGIN_FAIL: 
        case LOGOUT_FAIL:
        case DELETE_USER_FAIL:
            return state

        case AUTHENTICATED_SUCCESS:
        case AUTHENTICATED_FAIL:
            return {...state, isAuthenticated: payload}

        default:
            return state
    }
}