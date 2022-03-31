import { combineReducers } from 'redux'
import { themeReducers } from './themeReducers'
import { navBarReducers } from './navBarReducers'

export const rootReducer = combineReducers({ themeReducers, navBarReducers })
