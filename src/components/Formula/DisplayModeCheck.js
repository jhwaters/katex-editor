import React from 'react'
import { connect } from 'react-redux'
import { toggleFormulaDisplayMode } from '../../actions'
import styles from './FormulaEditor.module.css'


const DisplayModeCheck = ({initial, onchange}) => (
  <div className={styles.optionDisplayMode}>
    <div>Inline Style:</div>
    <input id="inlineStyleCheck" 
      type="checkbox" 
      onChange={onchange}
      defaultChecked={!initial} >
    </input>
  </div>
)

const mapState = state => ({
  initial: state.formula.displayMode
})

const mapDispatch = dispatch => ({
  onchange: () => dispatch(toggleFormulaDisplayMode())
})

export default connect(mapState, mapDispatch)(DisplayModeCheck)