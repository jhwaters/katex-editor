import * as actions from '../constants/ActionTypes'

export const setFormula = formula => ({
  type: actions.SET_FORMULA,
  payload: formula,
})

export const setFormulaDisplaySize = size => ({
  type: actions.SET_FORMULA_DISPLAYSIZE,
  payload: size,
})

export const toggleFormulaDisplayMode = () => ({
  type: actions.TOGGLE_FORMULA_DISPLAYMODE,
})