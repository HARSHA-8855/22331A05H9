import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { LoggerProvider } from './context/LoggerContext';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <LoggerProvider>
      <App />
    </LoggerProvider>
  </BrowserRouter>
);