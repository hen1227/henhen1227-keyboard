import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Opt into scroll reveals before the first paint, so nothing on screen is shown, hidden and shown
// again. Without IntersectionObserver, or with reduced motion, everything simply stays visible.
if (
  'IntersectionObserver' in window &&
  !(window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches)
) {
  document.documentElement.classList.add('reveal-ready');
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
