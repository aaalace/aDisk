import { 
    GET_FILES_SUCCESS,
    CREATE_NEW_FOLDER_SUCCESS,
    UPLOAD_NEW_FILE_SUCCESS
} from '../../actions/types'

const initialState = {
    'private': {
        folders: [],
        files: [],
        filled: false
    },
    'shared': {
        folders: [],
        files: [],
        filled: false
    }
}

// eslint-disable-next-line
export default function(state = initialState, action) {
    const { type, payload } = action
    switch(type) {
        case GET_FILES_SUCCESS:
            if(payload.board === 'files' || payload.board === 'recent'){
                return {...state, 'private': {...payload.data, filled: true}
                }
            }
            return {...state, 'shared': {...payload.data, filled: true},
            }
        case CREATE_NEW_FOLDER_SUCCESS:
            let stateFolderCopy = {...state}
            if(payload.board === 'private'){
                stateFolderCopy.private.files.push(payload.data)
                return stateFolderCopy
            }
            stateFolderCopy.shared.files.push(payload.data)
            return stateFolderCopy
        case UPLOAD_NEW_FILE_SUCCESS:
            let stateFileCopy = {...state}
            if(payload.board === 'private'){
                stateFileCopy.private.files.push(payload.data)
                return stateFileCopy
            }
            stateFileCopy.shared.files.push(payload.data)
            return stateFileCopy
        default:
            return state
    }
}