import React from 'react';
import { TextField } from '@mui/material';

import { pushMessage } from '../../firebaseConfig';

const MessageField = ({ name, setText, text }) => {
  return (
    <TextField
      id="standard-basic"
      variant="standard"
      fullWidth={true}
      onChange={(e) => setText(e.target.value)}
      value={text}
    />
  );
}

export default MessageField;
