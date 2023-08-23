import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import AppRouter from '@routes';
import './shared/styles/index.css';
import { BrowserRouter } from 'react-router-dom';

// ------------------------------------------

const App = () => <AppRouter />;

const AppWrapper: React.FC = () => (
  <BrowserRouter>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </BrowserRouter>
);

export default AppWrapper;
