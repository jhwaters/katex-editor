import React from 'react'
import styles from './FormulaEditor.module.css'
import FormulaInput from './FormulaInput'
import FormulaDisplay from './FormulaDisplay'
import DisplaySizeSlider from './DisplaySizeSlider'
import DisplayModeCheck from './DisplayModeCheck'
import RandomExampleButton from './RandomExample'

const FormulaEditor = () => (
  <div className={styles.formulaWrapper}>
    <div className={styles.title}>Formula Editor (LaTeX)</div>
    <div className={styles.formulaOptions}>
      <DisplayModeCheck />
      <DisplaySizeSlider />
      <RandomExampleButton />
    </div>
    <FormulaInput />
    <FormulaDisplay />
  </div>
)

export default FormulaEditor
