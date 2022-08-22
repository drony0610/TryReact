import React from 'react';
import './App.css';
import { Message } from './components/Message';
import { RenderPage } from './components/RenderPage';

function App() {
  
  return (
    
    <div className="App">
      <header className="App-header">
        <RenderPage />
      </header>
    </div>
  );
}

export default App;