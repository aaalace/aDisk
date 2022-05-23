import { createStore, applyMiddleware, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk';

import auth from './reducers/auth';
import profile from './reducers/profile'

const rootReducer = combineReducers({
    auth,
    profile
})

export const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
)