import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter, Routes } from 'react-router-dom';

import './index.css'

import UnauthRoutes from './routes/guest';
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <div className="App h-screen">
      <HashRouter>
          <Routes>
            {UnauthRoutes}
          </Routes>
      </HashRouter>
    </div>
  </React.StrictMode>,
)
