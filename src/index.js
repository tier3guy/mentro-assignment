// Internal dependencies
import React from 'react';
import ReactDOM from 'react-dom/client';

// External Dependencies
import { BrowserRouter as Router } from 'react-router-dom';

// Styles
import './styles/index.css';

// Components
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);