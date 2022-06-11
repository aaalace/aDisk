import { 
    REGISTER_SUCCESS, 
    REGISTER_FAIL, 
    LOGIN_SUCCESS, 
    LOGIN_FAIL, 
    LOGOUT_SUCCESS, 
    LOGOUT_FAIL,
    AUTHENTICATED_SUCCESS, 
    AUTHENTICATED_FAIL,
    CHANGE_PASSWORD_SUCCESS,
    CHANGE_PASSWORD_FAIL,
    DELETE_USER_SUCCESS,
    DELETE_USER_FAIL
} from '../../actions/types'

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
    
        case AUTHENTICATED_SUCCESS:
        case AUTHENTICATED_FAIL:
            return {...state, isAuthenticated: payload}

        case LOGOUT_SUCCESS: 
        case DELETE_USER_SUCCESS:
            return {...initialState, isAuthenticated: false}
        

        case REGISTER_FAIL: 
        case LOGIN_FAIL: 
        case LOGOUT_FAIL:
        case CHANGE_PASSWORD_SUCCESS:
        case CHANGE_PASSWORD_FAIL:    
        case DELETE_USER_FAIL:
        default:
            return state
    }
}