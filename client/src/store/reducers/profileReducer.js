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
    first_name: 'Неопознанный',
    last_name: 'Объект',
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
                first_name: payload.profile.first_name,
                last_name: payload.profile.last_name
            }
        
        case LOAD_PROFILE_FAIL:
        case LOGOUT_SUCCESS:
            return initialState
        
        case UPDATE_PROFILE_SUCCESS:
            return {...state,
                first_name: payload.profile.first_name,
                last_name: payload.profile.last_name
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