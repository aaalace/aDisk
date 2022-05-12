import { REGISTER_SUCCESS, REGISTER_FAIL, LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT_SUCCESS, LOGOUT_FAIL } from './types'
import Cookies from 'js-cookie'

export const login = (username, password) => async dispatch => {
    
    try {
        const body = JSON.stringify({username, password})
        const csrftoken = Cookies.get('csrftoken')
        let headers = new Headers()
        headers.append('Accept', 'application/json')
        headers.append('Content-Type', 'application/json')
        headers.append('X-CSRFToken', csrftoken)

        const response = await fetch(`${process.env.REACT_APP_API_URL}/user/login`, {
            method: 'POST',
            body: body,
            headers: headers,
            credentials: 'include'
        })

        const result = await response.json()

        if(result.success){
            dispatch({
                type: LOGIN_SUCCESS,
                payload: result
            })
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
        console.log(error)
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
        const body = JSON.stringify({email, username, password, re_password})
        const csrftoken = Cookies.get('csrftoken')
        let headers = new Headers()
        headers.append('Accept', 'application/json')
        headers.append('Content-Type', 'application/json')
        headers.append('X-CSRFToken', csrftoken)

        const response = await fetch(`${process.env.REACT_APP_API_URL}/user/register`, {
            method: 'POST',
            body: body,
            headers: headers,
            credentials: 'include'
        })

        const result = await response.json()

        if(result.success){
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