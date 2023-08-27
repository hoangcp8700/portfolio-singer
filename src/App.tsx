import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import AppRouter from '@routes';
import './shared/styles/index.css';
import { BrowserRouter } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import ToastifyProvider from '@shared/components/common/Toast';

// ------------------------------------------

const App = () => <AppRouter />;

const AppWrapper: React.FC = () => (
  <BrowserRouter>
    <HelmetProvider>
      <ToastifyProvider />
      <App />
    </HelmetProvider>
  </BrowserRouter>
);

export default AppWrapper;
