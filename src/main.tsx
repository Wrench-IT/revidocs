import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.scss';

const appElement = document.getElementById('root')!;

const root = createRoot(appElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
