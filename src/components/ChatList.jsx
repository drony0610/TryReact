import React from "react";
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';

export function ChatList() {
    const chats = [
        {id: 1,
        name: 'chat 1'},
        {id: 2,
        name: 'chat 2'},
        {id: 3,
        name: 'chat 3'}
    ];

    return (chats.map((chat) =>
            <Box sx={{ width: '100%', maxWidth: 360 }}>
              <nav aria-label="chats-list">
                <List>
                  <ListItem disablePadding>
                    <ListItemButton>
                      <ListItemIcon sx={{ color: "blue" }}>
                      {chat.name}
                      </ListItemIcon>
                    </ListItemButton>
                  </ListItem>
                </List>
              </nav>
            </Box>))
}
