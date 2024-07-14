import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter as Router,Routes,Route } from 'react-router-dom';

const AppLayout = () => (
  <Router>
    <App/>
  </Router>
)

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<AppLayout />)
