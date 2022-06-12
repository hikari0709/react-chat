import React, { useState } from 'react';
import { makeStyles } from '@mui/styles';
import { Grid, Avatar } from '@mui/material';
import MessageField from './MessageField';

const useStyles = makeStyles({
  root: {
    gridRow: 2,
    margin: '26px',
  },
});

const MessageInputField = ({ name }) => {
  const [text, setText] = useState('');
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={1}><Avatar src="/broken-image.jpg" /></Grid>
        <Grid item xs={10}><MessageField name={name} setText={setText} text={text}/></Grid>
        <Grid item xs={1}></Grid>
      </Grid>
    </div>
  );
}

export default MessageInputField;
