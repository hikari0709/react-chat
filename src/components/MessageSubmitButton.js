import React from 'react';
import IconButton from '@mui/material/IconButton';
import SendIcon from '@mui/icons-material/Send';

import { pushMessage } from '../../firebaseConfig';

const MessageSubmitButton = ({ inputElement, name, setText, text }) => {
  return (
    <IconButton
      disabled={text === ''}
      onClick={() => {
        pushMessage({ name: 'たにもと' , text });
        setText('');
        inputElement.current.focus();
      }}
    >
      <SendIcon />
    </IconButton>
  );
}

export default MessageSubmitButton;
