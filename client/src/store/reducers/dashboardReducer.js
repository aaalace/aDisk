import { 
    GET_FILES_SUCCESS,
    CREATE_NEW_FOLDER_SUCCESS,
    UPLOAD_NEW_FILE_SUCCESS
} from '../../actions/types'

const initialState = {
    'private': {
        folders: [],
        files: []
    },
    'shared': {
        folders: [],
        files: []
    }
}

// eslint-disable-next-line
export default function(state = initialState, action) {
    const { type, payload } = action
    switch(type) {
        case GET_FILES_SUCCESS:
            if(payload.board === 'files' || payload.board === 'recent'){
                return {...state, 'private': payload.data
            }}
            return {...state, 'shared': payload.data
            }
        case CREATE_NEW_FOLDER_SUCCESS:
            return state
        case UPLOAD_NEW_FILE_SUCCESS:
            return state
        default:
            return state
    }
}