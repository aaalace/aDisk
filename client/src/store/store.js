import { configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'

import authReducer from './reducers/authReducer';
import profileReducer from './reducers/profileReducer'
import dashboardReducer from './reducers/dashboardReducer'

const rootReducer = {
    auth: authReducer,
    profile: profileReducer,
    dashboard: dashboardReducer
}

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
})
