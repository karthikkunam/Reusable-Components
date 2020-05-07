import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({potato: {}, tomato: {}})
const store = createStore(rootReducer,
    applyMiddleware(thunk)
    
)

export default store;