import React from 'react'
import { connect } from 'react-redux'
import katex from 'katex'
import 'katex/dist/katex.min.css';
import styles from './FormulaEditor.module.css'

const FormulaDisplay = ({math, displayMode, size}) => {
  try {
    const html = katex.renderToString(math, {displayMode: displayMode});
    return (
      <div style={{fontSize: `${size}em`}}
        className={styles.formulaDisplay} >
        <span dangerouslySetInnerHTML={{__html: html}} />
      </div>
    )
  } catch (e) {
    if (e instanceof katex.ParseError) {
      const html = e.message.replace(/&/g, "&amp;")
        .replace(/</g, "&lt;").replace(/>/g, "&gt;")
        .split(': ').join('\n');
      return (
        <pre className={styles.formulaDisplayError}
        dangerouslySetInnerHTML={{__html: html}} />
      )
    }
  }
}

const mapState = state => ({
  math: state.formula.formula,
  displayMode: state.formula.displayMode,
  size: state.formula.displaySize,
})

export default connect(mapState)(FormulaDisplay)

