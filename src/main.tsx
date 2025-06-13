import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter, Navigate, Route, Routes } from 'react-router-dom';

import './index.css'

import UnauthRoutes from './routes/guest';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <div className="App h-screen">
      <HashRouter>
        <Routes>
          <Route path="*" element={<Navigate to="/register-user" replace />} />,
          {UnauthRoutes}
        </Routes>
      </HashRouter>
    </div>
  </React.StrictMode>,
)
