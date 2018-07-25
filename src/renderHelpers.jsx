import React from 'react'
import { default as MuiButton } from '@material-ui/core/Button'
import { default as MuiPaper } from '@material-ui/core/Paper'

const style = {
  Paper: { padding: 10, marginBottom: 20 }
}

const Button = (props) => {
  return (
    <MuiButton variant="outlined" {...props}>
      {props.children}
    </MuiButton>
  )
}

const Paper = (props) => {
  return (
    <MuiPaper style={style.Paper} {...props}>
      {props.children}
    </MuiPaper>
  )
}

export { style, Button, Paper };
