import { app } from '../lib/axios'
import Cookies from 'js-cookie'
import { 
    LOAD_PROFILE_SUCCESS,
    LOAD_PROFILE_FAIL,
    UPDATE_PROFILE_SUCCESS, 
    UPDATE_PROFILE_FAIL,
    UPDATE_USER_AVATAR_SUCCESS,
    UPDATE_USER_AVATAR_FAIL,
    DELETE_USER_AVATAR_SUCCESS,
    DELETE_USER_AVATAR_FAIL
} from './types'

export const loadUser = () => async dispatch => {
    try {

        const config = {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }

        const result = await app.get(`/user_profile/get_user_profile`, config)
        
        if(result.data.error){
            dispatch({
                type: LOAD_PROFILE_FAIL,
            })
        }
        else{
            dispatch({
                type: LOAD_PROFILE_SUCCESS,
                payload: result.data
            })
        }
    } 
    catch (error) {
        dispatch({
            type: LOAD_PROFILE_FAIL,
        })
        console.log('error in getting profile')
    }
}

export const updateProfile = (data) => async dispatch => {
    try {
        const config = {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'X-CSRFToken': Cookies.get('csrftoken')
            }
        }

        const body = JSON.stringify(data)

        const result = await app.put(`/user_profile/update_user_profile`, body, config)
        
        if(result.data.error){
            dispatch({
                type: UPDATE_PROFILE_FAIL,
            })
            return [false, result.data.error]
        }
        else{
            dispatch({
                type: UPDATE_PROFILE_SUCCESS,
                payload: data
            })
            return [true]
        }
    } 
    catch (error) {
        dispatch({
            type: UPDATE_PROFILE_FAIL,
        })
        console.log('error in updating profile')
        return [false, '']
    }
}

export const updateAvatar = (data) => async dispatch => {
    try {
        const config = {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'X-CSRFToken': Cookies.get('csrftoken')
            }
        }

        const body = JSON.stringify(data)

        const result = await app.put(`/user_profile/update_user_avatar`, body, config)
        
        if(result.data.error){
            dispatch({
                type: UPDATE_USER_AVATAR_FAIL,
            })
            return false
        }
        else{
            dispatch({
                type: UPDATE_USER_AVATAR_SUCCESS,
                payload: result.data.path
            })
            return true
        }
    } 
    catch (error) {
        dispatch({
            type: UPDATE_USER_AVATAR_FAIL,
        })
        console.log('error in updating profile')
        return false
    }
}

export const deleteAvatar = (data) => async dispatch => {
    try {
        const config = {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'X-CSRFToken': Cookies.get('csrftoken')
            }
        }

        const body = JSON.stringify(data)

        const result = await app.put(`/user_profile/delete_user_avatar`, body, config)
        
        if(result.data.error){
            dispatch({
                type: DELETE_USER_AVATAR_FAIL,
            })
            return false
        }
        else{
            dispatch({
                type: DELETE_USER_AVATAR_SUCCESS,
                payload: 'default.jpg'
            })
            return true
        }
    } 
    catch (error) {
        dispatch({
            type: DELETE_USER_AVATAR_FAIL,
        })
        console.log('error in updating profile')
        return false
    }
}
