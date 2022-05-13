import { app } from '../axios'
import Cookies from 'js-cookie'
import { 
    LOAD_PROFILE_SUCCESS,
    LOAD_PROFILE_FAIL
} from './types'

export const loadUser = () => async dispatch => {
    try {
        const config = {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }

        const result = await app.post(`/user_profile/get_user_profile`, config)
        
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