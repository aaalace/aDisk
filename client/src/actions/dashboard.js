import { app } from '../lib/axios'
import Cookies from 'js-cookie'
import { 
    CREATE_NEW_FOLDER_SUCCESS,
    CREATE_NEW_FOLDER_FAIL,
    UPLOAD_NEW_FILE_SUCCESS,
    UPLOAD_NEW_FILE_FAIL
} from './types'


export const createNewFolder = (user_id, folder_place, folder_name) => async dispatch => {
    
    try {
        const config = {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'X-CSRFToken': Cookies.get('csrftoken')
            }
        }

        const body = JSON.stringify({user_id, folder_place, folder_name})

        const result = await app.post(`/storage/create_new_folder`, body, config)

        if(result.data.success){
            dispatch({
                type: CREATE_NEW_FOLDER_SUCCESS
            })
            return [true]
        }
        else {
            dispatch({
                type: CREATE_NEW_FOLDER_FAIL
            })
        }
        return [false, '']
    } catch (error) {
        dispatch({
            type: CREATE_NEW_FOLDER_FAIL
        })
        console.log('error in creating new folder')
        return [false, '']
    }
}


export const uploadNewFile = (user_id, folder_place, name, b64) => async dispatch => {
    
    try {
        const config = {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'X-CSRFToken': Cookies.get('csrftoken')
            }
        }

        const body = JSON.stringify({user_id, folder_place, name, b64})

        const result = await app.post(`/storage/upload_new_file`, body, config)

        if(result.data.success){
            dispatch({
                type: UPLOAD_NEW_FILE_SUCCESS
            })
            return [true]
        }
        else {
            dispatch({
                type: UPLOAD_NEW_FILE_FAIL
            })
        }
        return [false, '']
    } catch (error) {
        dispatch({
            type: UPLOAD_NEW_FILE_FAIL
        })
        console.log('error in uploading new file')
        return [false, '']
    }
}
