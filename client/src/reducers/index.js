import { combineReducers } from 'redux'
import app from './app'
import rooms from './rooms'

export default combineReducers({
  app, rooms,
})
