import { app } from '../lib/axios'
import Cookies from 'js-cookie'
import { 
    LOAD_PROFILE_SUCCESS,
    LOAD_PROFILE_FAIL,
    UPDATE_PROFILE_SUCCESS, 
    UPDATE_PROFILE_FAIL
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

export const updateProfile = (first_name, last_name) => async dispatch => {
    try {
        const config = {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'X-CSRFToken': Cookies.get('csrftoken')
            }
        }

        const body = JSON.stringify({
            first_name,
            last_name
        })

        const result = await app.put(`/user_profile/update_user_profile`, body, config)
        
        if(result.data.error){
            dispatch({
                type: UPDATE_PROFILE_FAIL,
            })
        }
        else{
            dispatch({
                type: UPDATE_PROFILE_SUCCESS,
                payload: result.data
            })
        }
    } 
    catch (error) {
        dispatch({
            type: UPDATE_PROFILE_FAIL,
        })
        console.log('error in updating profile')
    }
}
