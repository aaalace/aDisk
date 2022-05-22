import { app } from '../lib/axios'
import Cookies from 'js-cookie'
import { loadUser } from './profile'
import { 
    REGISTER_SUCCESS, 
    REGISTER_FAIL, 
    LOGIN_SUCCESS, 
    LOGIN_FAIL, 
    LOGOUT_SUCCESS, 
    LOGOUT_FAIL,
    AUTHENTICATED_SUCCESS, 
    AUTHENTICATED_FAIL,
    LOGOUT_SUCCESS_PROFILE,
    DELETE_USER_SUCCESS,
    DELETE_USER_FAIL
} from './types'

export const checkAuth = () => async dispatch => {
    
    try {
        const config = {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }

        const result = await app.get(`/user/auth`, config)

        if(result.data.isAuthenticated === 'success'){
            dispatch({
                type: AUTHENTICATED_SUCCESS,
                payload: true
            })
            return true
        }
    } 
    catch (error) {
        dispatch({
            type: AUTHENTICATED_FAIL,
            payload: false
        })
        return false
    }
}


export const login = (username, password) => async dispatch => {
    
    try {
        const config = {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'X-CSRFToken': Cookies.get('csrftoken')
            }
        }

        const body = JSON.stringify({username, password})

        const result = await app.post(`/user/login`, body, config)

        if(result.data.success){
            dispatch({
                type: LOGIN_SUCCESS
            })
            dispatch(loadUser())
            return true
        }
        else {
            dispatch({
                type: LOGIN_FAIL
            })
        }
        return false
    } catch (error) {
        dispatch({
            type: LOGIN_FAIL
        })
        console.log('error in login')
        return false
    }
}

export const logout = () => async dispatch => {
    
    try {
        const csrftoken = Cookies.get('csrftoken')
        let headers = new Headers()
        headers.append('Accept', 'application/json')
        headers.append('Content-Type', 'application/json')
        headers.append('X-CSRFToken', csrftoken)

        const response = await fetch(`${process.env.REACT_APP_API_URL}/user/logout`, {
            method: 'POST',
            headers: headers,
            credentials: 'include'
        })

        const result = await response.json()

        if(result.success){
            dispatch({
                type: LOGOUT_SUCCESS,
            })
            return true
        }
        else {
            dispatch({
                type: LOGOUT_FAIL
            })
        }
        return false
    } catch (error) {
        dispatch({
            type: LOGOUT_FAIL
        })
        console.log('error in logout')
        return false
    }
}

export const register = (email, username, password, re_password) => async dispatch =>  {

    try {        
        const config = {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'X-CSRFToken': Cookies.get('csrftoken')
            }
        }
        const body = JSON.stringify({email, username, password, re_password})

        const result = await app.post(`/user/register`, body, config)

        if(result.data.success){
            dispatch({
                type: REGISTER_SUCCESS
            })
            return true
        }
        else {
            dispatch({
                type: REGISTER_FAIL
            })
        }
        return false
    } catch (err) {
        dispatch({
            type: REGISTER_FAIL
        })
        console.log('error in register')
        return false
    }
}

export const deleteAccount = () => async dispatch =>  {

    try {
        const config = {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'X-CSRFToken': Cookies.get('csrftoken')
            }
        }

        const result = await app.delete(`/user/delete`, config)

        if(result.data.success){
            dispatch({
                type: DELETE_USER_SUCCESS
            })
            return true
        }
        else {
            dispatch({
                type: DELETE_USER_FAIL
            })
        }
        return false
    } catch (err) {
        dispatch({
            type: DELETE_USER_FAIL
        })
        console.log('error in delete account')
        return false
    }
}