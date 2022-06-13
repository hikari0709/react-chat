import React from 'react';
import { TextField } from '@mui/material';

import { pushMessage } from '../../firebaseConfig';

const MessageField = ({ name, setText, text }) => {
  return <TextField
    id="standard-basic"
    variant="standard"
    fullWidth={true}
    onChange={(e) => setText(e.target.value)}
    onKeyDown={(e) => {
      const text = e.target.value;
      if (text === '') return;

      if (e.key === 'Enter') {
        pushMessage({ name: 'たにもと', text })
      }
    }}
  />;
}

export default MessageField;
