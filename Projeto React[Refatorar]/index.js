import { createRoot, render } from 'react-dom';
import React from 'react';
import App from './App';
import './index.css';
import reportWebVitals from './reportWebVitals';


const root = createRoot(document.getElementById('root'));
render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  root
);

reportWebVitals();
