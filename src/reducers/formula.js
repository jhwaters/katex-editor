import {
  SET_FORMULA,
  SET_FORMULA_DISPLAYSIZE,
  TOGGLE_FORMULA_DISPLAYMODE,
} from '../constants/ActionTypes'

const initialState = {
  'formula': '',
  'displayMode': true,
  'displaySize': 1.5,
}

function formulaReducer(state=initialState, action) {
  switch (action.type) {
    case SET_FORMULA:
      return {
        ...state, 
        formula: action.payload, 
      }
    case SET_FORMULA_DISPLAYSIZE:
      return {
        ...state, 
        displaySize: action.payload,
      }
    case TOGGLE_FORMULA_DISPLAYMODE:
      return {
        ...state, 
        displayMode: !state.displayMode,
      }
    default:
      return state
  }
}

export default formulaReducer
