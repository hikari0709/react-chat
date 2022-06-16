import React from "react";
import { makeStyles } from '@mui/styles';

import { db } from "../../firebaseConfig";
import { ref, onValue, query, orderByKey, limitToLast } from "firebase/database";

const useStyles = makeStyles({
  root: {
    gridRow: 1,
  },
});

const MessageList = () => {
  const messageRef = query(ref(db, 'messages/'), limitToLast(5), orderByKey());

  onValue(messageRef, (snapshot) => {
    const messages = snapshot.val();
    const entries = Object.entries(messages);
    entries.map(entries => {
      const key = entries[0];
      const messageInfo = entries[1];
      return { key, ...messageInfo };
    });
  });

  const classes = useStyles();
  return <div className={classes.root}>{ }</div>;
};

export default MessageList;
