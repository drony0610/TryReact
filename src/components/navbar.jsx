import React from 'react';
import { useState } from 'react';
import {AppBar, Button, Box, IconButton, Toolbar, Typography } from '@mui/material';
import { BrowserRouter, Link, Switch, Route, Routes } from 'react-router-dom';
import '../components/style.css';
import { Homepage } from '../pages/home-page';
import { Profile } from '../pages/profile-page';
import { Chats } from '../pages/chats-page';
import { Chat } from './chat';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import { PageNotFound } from '../pages/page-not-found';

import { ColorModeSwitch } from './color-mode-switch';

export const NavbarPanel = () => {

  const [chatList, setChatList] = useState([]);

function addChat() {

  setChatList((prevChatList) => ([
    ...prevChatList,
    {
      id: prevChatList.length+1,
      name: `Chat`+ +(prevChatList.length+1),
      message: []
    }
  ]));

  console.log(chatList);
}

  return (
    <Box sx={{ flexGrow: 1, minWidth: '100%' }}>
      <AppBar position="static" sx={{ backgroundColor: '#282c34', color: '#1976d2' }}>
        <BrowserRouter>
          <Toolbar>
            <Button sx={{ color: '#1976d2' }}>
              <Link to="/" className='link'>Home</Link>
            </Button>
            <Button sx={{ color: '#1976d2' }}>
              <Link to="/profile" className='link'>Profile</Link>
            </Button>
            <Button sx={{ color: '#1976d2' }}>
              <Link to="/chats" className='link'>Chats</Link>
            </Button>
            <IconButton sx={{ color: '#1976d2' }}>
              <Link to="/chat" className='link'><ChatBubbleOutlineIcon /></Link>
            </IconButton>
            <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
              NameSurname
            </Typography>
            <ColorModeSwitch />
          </Toolbar>
          
          {/* Изменил Switch, так как в package router6 Андрей */}
          <Routes>

            {/* Переделал роуты под 6 версию (component заменил на element) Андрей */}
            <Route exact path="/profile/" element={<Profile/>} />

            <Route exact path="/chats/" element = {<Chats chats={chatList} addChat={addChat} /> }/>
        
            <Route exact path="/Chat/" element={<Chat/>} />

            <Route exact path="/" element={<Homepage/>} />

            <Route
              path="/:name?"
              render = {({ match }) => {

                const { name } = match.params;
                const chat = chatList.find((el) => el.name === name);
                if (!chat) {return <PageNotFound />}

                return <Chat {...chat} />
              }}
            />

          </Routes>
        </BrowserRouter>
      </AppBar>
    </Box>
  );
} 
