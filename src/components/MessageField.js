import React from 'react';
import { TextField } from '@mui/material';

const MessageField = ({inputElement, name, setText, text }) => {
  return (
    <TextField
      id="standard-basic"
      variant="standard"
      fullWidth={true}
      inputRef={inputElement}
      value={text}
      autoFocus
      onChange={(e) => setText(e.target.value)}
    />
  );
}

export default MessageField;
