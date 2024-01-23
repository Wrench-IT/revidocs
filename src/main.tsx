import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/App/component.tsx';
import { BrowserRouter } from 'react-router-dom';

const appElement = document.getElementById('root')!;

const root = createRoot(appElement);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);
