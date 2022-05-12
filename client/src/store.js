import { createStore, applyMiddleware, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk';
import auth from './reducers/auth';

const rootReducer = combineReducers({
    auth
})

export const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
)