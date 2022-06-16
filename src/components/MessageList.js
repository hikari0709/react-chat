import React,  { useState, useEffect } from 'react';
import { List } from '@mui/material';
import { makeStyles } from '@mui/styles';

import { db } from '../../firebaseConfig';
import { ref, onValue, query, orderByKey, limitToLast } from 'firebase/database';

import MessageItem from './MessageItem'

const useStyles = makeStyles({
  root: {
    width: '100%',
    overflow: 'auto',
    gridRow: 1,
  },
});

const MessageList = () => {
  const [messages, setMessages] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    const messageRef = query(ref(db, 'messages/'), limitToLast(15), orderByKey());
    onValue(messageRef, (snapshot) => {
      const messages = snapshot.val();
      const entries = Object.entries(messages);
      const newMessages = entries.map(entries => {
        const key = entries[0];
        const messageInfo = entries[1];
        return { key, ...messageInfo };
      });

      setMessages(newMessages);
    });
  }, []);

  return (
    <List className={classes.root}>
      {messages.map(({key, name, text}) => {
        return (
          <MessageItem
            key={key}
            name={name}
            text={text}
          >
            item
          </MessageItem>
        );
      })}
    </List>
  );
};

export default MessageList;
