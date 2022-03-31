import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { rootReducer } from './reducers/rootReducer'

export const AppStore = createStore(rootReducer, applyMiddleware(thunk))
