import React from 'react';
import './App.css';
import TopBar from './components/TopBar';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import Statusbar from './components/Statusbar';

const App = () => {
  return (
    <div className="app-container">
      <TopBar />
      <div className="content-container">
        <Sidebar />
        <MainContent />
      </div>
      <Statusbar />
    </div>
  );
};

export default App;
