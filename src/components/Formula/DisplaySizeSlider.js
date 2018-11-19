import React from 'react'
import { connect } from 'react-redux'
import { setFormulaDisplaySize } from '../../actions'
import styles from './FormulaEditor.module.css'

const DisplaySizeSlider = ({initial, onchange}) => (
  <div className={styles.optionDisplaySlider}>
    <div>Size:</div>
    <input type="range" min="0.4" max="7" step="0.2" defaultValue="1.4" onChange={onchange} />
  </div>
)

const mapState = state => ({
  initial: state.formula.displaySize
})

const mapDispatch = dispatch => ({
  onchange: (evt) => dispatch(setFormulaDisplaySize(evt.target.value)),
})

export default connect(mapState, mapDispatch)(DisplaySizeSlider)