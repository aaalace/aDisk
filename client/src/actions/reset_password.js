import { app } from '../lib/axios'
import { 
    SEND_RESET_SUCCESS,
    SEND_RESET_FAIL
} from './types'

export const sendResetAction = (data) => async dispatch => {
    try {

        const config = {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }

        const body = JSON.stringify(data)

        const result = await app.post(`/reset_password/send_reset`, body, config)
        
        if(result.data.success){
            dispatch({
                type: SEND_RESET_SUCCESS,
            })
            return [true]
        }
        else{
            dispatch({
                type: SEND_RESET_FAIL,
            })
        }
        return [false, result.data.error]
    } 
    catch (error) {
        dispatch({
            type: SEND_RESET_FAIL,
        })
        return [false, error]
    }
}

export const checkResetDependency = (data) => async dispatch => {
    try {

        const config = {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }

        const body = JSON.stringify(data)

        const result = await app.post(`/reset_password/check_dependency`, body, config)
        
        if(result.data.success){
            return [true]
        }
        return [false, result.data.error]
    } 
    catch (error) {
        return [false, error]
    }
}

export const resetPassword = (data) => async dispatch => {
    try {

        const config = {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }

        const body = JSON.stringify(data)

        const result = await app.put(`/reset_password/reset`, body, config)
        
        if(result.data.success){
            return [true]
        }
        return [false, result.data.error]
    } 
    catch (error) {
        return [false, error]
    }
}



