//put all of reducer inside this file

import {combineReducers} from 'redux'
import {LOG_OUT} from '../actions/types'
import authReducer from './authReducer'
import layoutInitReducer from './layoutInitReducer'
import searchReducer from './searchReducer'
// import stakehReducer from './stakehReducer'

// import activitiesReducer from './activitiesReducer'
// import taskReducer from './taskReducer'

const appReducer = combineReducers({
    session:authReducer,
    layout:layoutInitReducer,
    searchConf:searchReducer
    // stakeh:stakehReducer,
    // activities:activitiesReducer,
    // tasks:taskReducer,
    // records:recReducer
 })

export const rootReducer = ( state, action ) => {
   if ( action.type === LOG_OUT ) {
     state = undefined
   }
   return appReducer(state, action)
 }
