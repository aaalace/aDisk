import { configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'

import authReducer from './reducers/authReducer';
import profileReducer from './reducers/profileReducer'

const rootReducer = {
    auth: authReducer,
    profile: profileReducer,
}

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
})
