import React, { useEffect, useRef } from 'react';
import Gravatar from 'react-gravatar';
import {
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
  Typography
} from '@mui/material';

const MessageItem = ({ name, text, isLastItem }) => {
  const ref = useRef(null);

  useEffect(() => {
    if (isLastItem) {
      ref.current.scrollIntoView({behavior : 'smooth'});
    }
  },
    [isLastItem]
  );

  return (
    <ListItem divider={true} ref={ref}>
        <ListItemAvatar>
          <Avatar src="/static/images/avatar/1.jpg" />
        </ListItemAvatar>
      <ListItemText
        primary={name}
          secondary={
            <Typography
              sx={{ display: 'inline' }}
              component="span"
              variant="body2"
              color="text.primary"
            >
              {text}
            </Typography>
          }
        />
      </ListItem>
  );
}

export default MessageItem;
