import React from 'react';
import './App.css';
import { Box, CssBaseline } from '@mui/material';
import { NavbarPanel } from './components/navbar';

const makeAppStyles = (theme) => {
  const { mode, background, grey } = theme.palette;
  return {
    background: mode === 'light' ? background.paper : grey[800],
  }
};

function App() {
  
  return (
    
    <>
      <CssBaseline />
      <Box sx={makeAppStyles}>
        <div className="App">
          <NavbarPanel />
        </div>
      </Box>
    </>
  );
}

export default App;