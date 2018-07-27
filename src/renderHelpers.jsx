import React from 'react'
import { default as MuiButton } from '@material-ui/core/Button'
import { default as MuiPaper } from '@material-ui/core/Paper'

const styles = {
  Button: { margin: 1 },
  Paper: { padding: 1, marginBottom: 20 },
}

const Button = (props) => {
  return (
    <MuiButton variant="outlined" style={styles.Button} {...props}>
      {props.children}
    </MuiButton>
  )
}

const Paper = (props) => {
  return (
    <MuiPaper style={styles.Paper} {...props}>
      {props.children}
    </MuiPaper>
  )
}

export { styles, Button, Paper };
