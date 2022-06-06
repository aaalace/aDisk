import { 
    LOAD_PROFILE_SUCCESS,
    LOAD_PROFILE_FAIL,
    LOGOUT_SUCCESS,
    UPDATE_PROFILE_SUCCESS, 
    UPDATE_PROFILE_FAIL,
    DELETE_USER_SUCCESS,
    DELETE_USER_FAIL
} from '../../actions/types'

const initialState = {
    user_id: null,
    email: '',
    username: '',
    name: '',
    date_joined: ''
}

// eslint-disable-next-line
export default function(state = initialState, action) {
    const { type, payload } = action

    switch(type) {
        case LOAD_PROFILE_SUCCESS:
            return {...state,
                user_id: payload.user_id, 
                email: payload.email,
                username: payload.username,
                name: payload.profile.name,
                date_joined: payload.date_joined
            }
        
        case LOAD_PROFILE_FAIL:
        case LOGOUT_SUCCESS:
            return initialState
        
        case UPDATE_PROFILE_SUCCESS:
            return {...state,
                username: payload.username,
                email: payload.email,
                name: payload.name,
            }

        case DELETE_USER_SUCCESS:
            return initialState

        case UPDATE_PROFILE_FAIL:
        case DELETE_USER_FAIL:
            return state

        default:
            return state
    }
}