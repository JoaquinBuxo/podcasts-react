import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider as ReduxProvider } from 'react-redux';
import { ApiProvider as ReduxApiProvider } from '@reduxjs/toolkit/dist/query/react';
import { store } from './redux/store';
import { podcastsApi } from './redux/apiSlice.ts';
import App from './App.tsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ReduxApiProvider api={podcastsApi}>
      <ReduxProvider store={store}>
        <App />
      </ReduxProvider>
    </ReduxApiProvider>
  </React.StrictMode>
);
