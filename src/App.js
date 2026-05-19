import React from 'react';
import { HashRouter, Routes, Route, NavLink, Navigate } from 'react-router-dom';
import tabs from './tabs';
import './App.css';

function App() {
  return (
    <HashRouter>
      <div className="app">
        <header className="header">
          <div className="header-left">
            <div className="satellite-icon">🛸</div>
            <div>
              <h1 className="title">KIRAN-1</h1>
              <p className="subtitle">Satellite Control Dashboard</p>
            </div>
          </div>
          <div className="status-badge">● LIVE</div>
        </header>

        <nav className="navbar">
          {tabs.map((tab) => (
            <NavLink
              key={tab.path}
              to={tab.path}
              end={tab.path === '/'}
              className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
            >
              {tab.name}
            </NavLink>
          ))}
        </nav>

        <main className="main">
          <Routes>
            {tabs.map((tab) => (
              <Route key={tab.path} path={tab.path} element={<tab.component />} />
            ))}
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </main>
      </div>
    </HashRouter>
  );
}

export default App;