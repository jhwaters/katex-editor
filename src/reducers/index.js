import { combineReducers } from 'redux'
import formulaReducer from './formula'

const rootReducer = combineReducers({
  formula: formulaReducer,
})

export default rootReducer