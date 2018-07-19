import React from 'react'
import { default as MuiButton } from '@material-ui/core/Button'

const Button = (props) => {
  return (
    <MuiButton variant="outlined" {...props}>
      {props.children}
    </MuiButton>
  )
}

export { Button };
