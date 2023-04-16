import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { auth } from './config/firebase';

auth.onAuthStateChanged(user => {
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <React.StrictMode>
      <App user={user} />
    </React.StrictMode>
  );
});

reportWebVitals();
