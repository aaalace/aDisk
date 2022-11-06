import { app } from '../lib/axios'
import Cookies from 'js-cookie'
import { 
    CREATE_NEW_FOLDER_SUCCESS,
    CREATE_NEW_FOLDER_FAIL,
    UPLOAD_NEW_FILE_SUCCESS,
    UPLOAD_NEW_FILE_FAIL,
    GET_FILES_SUCCESS,
    GET_FILES_FAIL,
    INSTALL_FILE_SUCCESS,
    INSTALL_FILE_FAIL,
    GET_FOLDERFILES_SUCCESS,
    GET_FOLDERFILES_FAIL
} from './types'
import axios from 'axios'


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

        console.log(folder_place)
        if(result.data.success){
            dispatch({
                type: CREATE_NEW_FOLDER_SUCCESS,
                payload: {'data': result.data.data, 'board': folder_place}
            })
            return [true, '']
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
                type: UPLOAD_NEW_FILE_SUCCESS,
                payload: {'data': result.data.data, 'board': folder_place}
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
        return [false, '']
    }
}


export const getFiles = (user_id, board) => async dispatch => {
    
    try {
        const config = {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'X-CSRFToken': Cookies.get('csrftoken')
            }
        }

        const result = await app.get(`/storage/get_files/${user_id}/${board}`, config)

        if(result.data.success){
            dispatch({
                type: GET_FILES_SUCCESS,
                payload: {'data': result.data.data, 'board': board}
            })
            return [true, result.data.data]
        }
        else {
            dispatch({
                type: GET_FILES_FAIL
            })
        }
        return [false, []]
    } catch (error) {
        dispatch({
            type: GET_FILES_FAIL
        })
        return [false, []]
    }
}


export const getFolderFiles = (user_id, board, folderName) => async dispatch => {
    
    try {
        const config = {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'X-CSRFToken': Cookies.get('csrftoken')
            }
        }

        const result = await app.get(`/storage/get_folderfiles/${user_id}/${board}/${folderName.split('#')[0]}/${folderName.split('#')[1]}/${folderName.split('#')[2]}/${folderName.split('#')[3]}`, config)

        if(result.data.success){
            dispatch({
                type: GET_FOLDERFILES_SUCCESS,
            })
            return [true, result.data.data]
        }
        else {
            dispatch({
                type: GET_FOLDERFILES_FAIL
            })
        }
        return [false, []]
    } catch (error) {
        dispatch({
            type: GET_FOLDERFILES_FAIL
        })
        return [false, []]
    }
}


export const installFile = (user_id, board, filename) => async dispatch => {
    
    try {
        axios({
            url: `/storage/install_file/${user_id}/${board}/${filename.split('#')[0]}/${filename.split('#')[1]}/${filename.split('#')[2]}/${filename.split('#')[3]}`,
            method: 'GET',
            responseType: 'blob'
        }).then((response) => {
            const url = window.URL.createObjectURL(new Blob([response.data]));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', `${filename.split('#')[3]}`);
            document.body.appendChild(link);
            link.click();
            dispatch({
                type: INSTALL_FILE_SUCCESS
            })
        });
    } catch (error) {
        dispatch({
            type: INSTALL_FILE_FAIL
        })
        return [false, '']
    }
}
