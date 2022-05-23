import React from 'react'
import { useState, useEffect } from 'react';

const CSRFToken = () => {
    
    let _csrftoken = null
    const [csrftoken, setcsrftoken] = useState('')

    async function getCsrfToken() {
        if (_csrftoken === null) {
          const response = await fetch(`${process.env.REACT_APP_API_URL}/user/csrf_cookie`, {
            credentials: 'include',
          });
          const data = await response.json();
          _csrftoken = data.csrfToken;
        }
        return _csrftoken;
      }

    useEffect(() => {
        const token = getCsrfToken()
        setcsrftoken(token)
    }, [])

    return(
        <input type='hidden' name='csrfmiddlewaretoken' value={csrftoken}/>
    )
}

export default CSRFToken