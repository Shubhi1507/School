
import React from 'react';
import TextField from '@mui/material/TextField';


export default function Input (props) {
    return (
        <TextField id="outlined-basic" label={props.label} variant="outlined" type={props.type} helperText={props.helperText} placeholder={props.placeholder} value={props.value} onChange={props.onChange} />
    );
  }
  