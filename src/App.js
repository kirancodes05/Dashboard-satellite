import React, { useState, useRef } from 'react';
import { HashRouter, NavLink, useLocation } from 'react-router-dom';
import tabs from './tabs';
import './App.css';

function TabContent({ fetchCount, setFetchCount, lastUpdated, setLastUpdated, visitedTabs }) {
  const location = useLocation();
  const currentPath = location.pathname || '/';
  
  visitedTabs.current.add(currentPath);

  return (
    <>
      {tabs.map((tab) => {
        const isActive = currentPath === tab.path;
        const hasBeenVisited = visitedTabs.current.has(tab.path);

        if (!hasBeenVisited) return null;

        return (
          <div
            key={tab.path}
            style={{ display: isActive ? 'block' : 'none' }}
          >
            <tab.component
              fetchCount={fetchCount}
              setFetchCount={setFetchCount}
              lastUpdated={lastUpdated}
              setLastUpdated={setLastUpdated}
            />
          </div>
        );
      })}
    </>
  );
}

function App() {
  const [fetchCount, setFetchCount] = useState(0);
  const [lastUpdated, setLastUpdated] = useState(null);
  const visitedTabs = useRef(new Set());

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
          <TabContent
            fetchCount={fetchCount}
            setFetchCount={setFetchCount}
            lastUpdated={lastUpdated}
            setLastUpdated={setLastUpdated}
            visitedTabs={visitedTabs}
          />
        </main>
      </div>
    </HashRouter>
  );
}

export default App;