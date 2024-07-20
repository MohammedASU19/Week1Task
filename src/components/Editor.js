import React from 'react';
import Sidebar from './Sidebar';
import TopBar from './TopBar';
import StartSection from './StartSection';
import './Editor.css';

const Editor = () => {
  return (
    <div className="editor-container">
      <TopBar />
      <div className="main-content">
        <Sidebar />
        <div className="editor">
          <StartSection />
        </div>
      </div>
    </div>
  );
};

export default Editor;
