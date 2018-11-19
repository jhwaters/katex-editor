import React from 'react'
import { connect } from 'react-redux'
import styles from './FormulaEditor.module.css'
import { latexExamples } from '../../utils'
import { setFormula } from '../../actions'

let examples = [];

function getRandomFormula() {
  if (examples.length === 0) {
    console.log('restocking')
    for (const ex in latexExamples) {
      const i = Math.floor(Math.random() * (1+examples.length))
      examples.splice(i, 0, latexExamples[ex])
    }
  }
  return examples.pop();
}

function typeFormula(fmla) {
  let a = document.getElementById('formulaInput');
  a.value = fmla;
  return fmla;
}

const RandomExampleButton = ({onclick}) => (
  <div className={styles.optionRandomExample}>
    <button onClick={onclick}>Random Example</button>
  </div>
)

const mapState = state => ({})

const mapDispatch = dispatch => ({
  onclick: () => dispatch(setFormula(typeFormula(getRandomFormula())))
})

export default connect(mapState, mapDispatch)(RandomExampleButton)