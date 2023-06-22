import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Header from './Header';
import Body from './Body';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <Header />
  <Body />
  </>
);

reportWebVitals();



