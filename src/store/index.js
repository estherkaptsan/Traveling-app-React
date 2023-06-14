import thunk from 'redux-thunk'
import { applyMiddleware, combineReducers, compose, legacy_createStore as createStore } from 'redux'
import { travelReducer } from './reducers/travels.reducer'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const rootReducer = combineReducers({
    travelModule: travelReducer,
})

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))

window.gStore = store