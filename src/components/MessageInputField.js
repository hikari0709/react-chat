import React, { useState, useRef } from 'react';
import { makeStyles } from '@mui/styles';
import { Grid, Avatar } from '@mui/material';
import MessageField from './MessageField';
import MessageSubmitButton from './MessageSubmitButton';

//import { gravatarPath } from '../gravatar';

const useStyles = makeStyles({
  root: {
    gridRow: 2,
    margin: '26px',
  },
});

const MessageInputField = ({ name }) => {
  const inputElement = useRef(null);
  const [text, setText] = useState('');
  const classes = useStyles();
  //const avatarPath = gravatarPath('tanimoto0709@gmail.com');

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={1}>
          <Avatar src={"/broken-image.jpg"} />
        </Grid>
        <Grid item xs={10}>
          <MessageField
            inputElement={inputElement}
            name={name}
            setText={setText}
            text={text}
          />
        </Grid>
        <Grid item xs={1}>
          <MessageSubmitButton
            inputElement={inputElement}
            name={name}
            setText={setText}
            text={text}
          />
        </Grid>
      </Grid>
    </div>
  );
}

export default MessageInputField;
