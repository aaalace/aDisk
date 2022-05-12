import { REGISTER_SUCCESS, REGISTER_FAIL, LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT_SUCCESS, LOGOUT_FAIL } from '../actions/types'

const initialState = {
    id: null,
    isAuthenticated: null,
    email: '',
    username: '',
    first_name: '',
    last_name: '',
}

export default function(state = initialState, action) {
    const { type, payload } = action

    switch(type) {
        case REGISTER_SUCCESS: 
            return {...state, isAuthenticated: false}

        case REGISTER_FAIL: 
            return state
        
        case LOGIN_SUCCESS: 
            return {...state, isAuthenticated: true, username: payload.username, email: payload.email}

        case LOGIN_FAIL: 
            return state

        case LOGOUT_SUCCESS: 
            return {...state, isAuthenticated: false, username: '', email: ''}

        case LOGOUT_FAIL: 
            return state

        default:
            return state
    }
}