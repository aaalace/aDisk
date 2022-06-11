import { 
    LOAD_PROFILE_SUCCESS,
    LOAD_PROFILE_FAIL,
    LOGOUT_SUCCESS,
    UPDATE_PROFILE_SUCCESS, 
    UPDATE_PROFILE_FAIL,
    DELETE_USER_SUCCESS,
    DELETE_USER_FAIL,
    UPDATE_USER_AVATAR_SUCCESS,
    UPDATE_USER_AVATAR_FAIL,
    DELETE_USER_AVATAR_SUCCESS,
    DELETE_USER_AVATAR_FAIL
} from '../../actions/types'

const initialState = {
    user_id: null,
    email: '',
    username: '',
    name: '',
    date_joined: '',
    avatar: 'default.jpg'
}

const testState = {
    user_id: 0,
    email: 'aDiskStrg@gmail.com',
    username: 'aDisk',
    name: 'adisk',
    date_joined: '2022-06-06',
    avatar: 'default.jpg'
}

// eslint-disable-next-line
export default function(state = testState, action) {
    const { type, payload } = action

    switch(type) {
        case LOAD_PROFILE_SUCCESS:
            return {...state,
                user_id: payload.user_id, 
                email: payload.email,
                username: payload.username,
                name: payload.profile.name,
                date_joined: payload.date_joined,
                avatar: payload.profile.avatar
            }
        
        case UPDATE_PROFILE_SUCCESS:
            return {...state,
                username: payload.username,
                email: payload.email,
                name: payload.name,
            }
        
        case UPDATE_USER_AVATAR_SUCCESS:
        case DELETE_USER_AVATAR_SUCCESS:
            return {...state,
                avatar: payload
            }

        case LOAD_PROFILE_FAIL:
        case LOGOUT_SUCCESS:
        case DELETE_USER_SUCCESS:
            return initialState

        case UPDATE_PROFILE_FAIL:
        case DELETE_USER_FAIL:
        case UPDATE_USER_AVATAR_FAIL:
        case DELETE_USER_AVATAR_FAIL:
            return state

        default:
            return state
    }
}