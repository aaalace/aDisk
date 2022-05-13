import { 
    LOAD_PROFILE_SUCCESS,
    LOAD_PROFILE_FAIL,
    LOGOUT_SUCCESS_PROFILE
} from '../actions/types'

const initialState = {
    user_id: null,
    email: '',
    username: '',
    first_name: '',
    last_name: '',
}

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
        case LOGOUT_SUCCESS_PROFILE:
            return initialState

        default:
            return state
    }
}