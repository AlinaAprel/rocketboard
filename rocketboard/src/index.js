import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './dashboard.css'
import './view.css'
import Dashboard from './Dashboard';
import View from './View';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Dashboard />
    <View />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
