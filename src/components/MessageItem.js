import React from 'react';
import {
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
  Typography
} from '@mui/material';

const MessageItem = ({name, text}) => {
  return (
    <ListItem divider={true}>
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
