import React, { Component } from 'react';
import styles from './App.module.css';
import FormulaEditor from '../Formula'

class App extends Component {
  render() {
    return (
      <div className={styles.app}>
        <link rel="text/css" href="../node_modules/katex/dist/katex.min.css"></link>
        <FormulaEditor />
      </div>
      
    );
  }
}

export default App;