import React from 'react'
import { connect } from 'react-redux'
import styles from './FormulaEditor.module.css'
import { setFormula } from '../../actions'

const tabsize = 2;

function onKeyDown(evt) {
  if (evt.keyCode === 9) { // handle tab
    let target = evt.target;
    const start = target.selectionStart;
    const end = target.selectionEnd;
    const value = target.value;
    target.value = value.substring(0,start) + Array(tabsize).fill(' ').join('') + value.substring(end);
    target.selectionStart = start + tabsize;
    target.selectionEnd = end + tabsize;
    evt.preventDefault();
  } else if (evt.keyCode === 8) { // handle backspace
    let target = evt.target;
    const start = target.selectionStart;
    if (start === target.selectionEnd) {
      const value = target.value;
      if (value.substring(start-tabsize, start) === Array(tabsize).fill(' ').join('')) {
        target.value = value.substring(0,start-tabsize) + value.substring(start);
        target.selectionStart = start - tabsize;
        target.selectionEnd = start - tabsize;
        evt.preventDefault();
      }
    }
  }
}

const FormulaInput = ({formula, onchange}) => (
  <div className={styles.formulaInput}>
    <textarea id="formulaInput"
      className={styles.inputFormula} 
      onKeyDown={onKeyDown}
      onChange={onchange}
      title="Type LaTeX code here"
      rows="6"
      cols="50"
      spellCheck="false"
      autoComplete="disable"
      defaultValue={formula}></textarea>
  </div>
)

const mapState = state => ({
  formula: state.formula.formula
})

const mapDispatch = dispatch => ({
  onchange: (evt) => dispatch(setFormula(evt.target.value)),
})

export default connect(mapState, mapDispatch)(FormulaInput)