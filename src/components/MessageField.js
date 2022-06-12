import React from 'react';
import { TextField } from '@mui/material';

const MessageField = ({ name, setText, text }) => {
  console.log({ text });
  return <TextField
    id="standard-basic"
    variant="standard"
    fullWidth={true}
    onChange={(e) => setText(e.target.value)}
  />;
}

export default MessageField;
