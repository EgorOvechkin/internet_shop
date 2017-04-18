import { combineReducers } from 'redux'
import products from './products'
import ui from './ui'

export default combineReducers({
  products,
  ui
})
