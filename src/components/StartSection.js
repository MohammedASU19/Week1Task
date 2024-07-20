import React from 'react';
import './StartSection.css';

const StartSection = () => {
  return (
    <div className="start-section">
      <h2>Start</h2>
      <ul>
        <li>
          <i className="fas fa-file"></i>
          <span>New File</span>
        </li>
        <li>
          <i className="fas fa-folder-open"></i>
          <span>Open File</span>
        </li>
        <li>
          <i className="fas fa-folder"></i>
          <span>Open Folder</span>
        </li>
        <li>
          <i className="fas fa-code-branch"></i>
          <span>Clone Git Repository</span>
        </li>
        <li>
          <i className="fas fa-plug"></i>
          <span>Connect to...</span>
        </li>
      </ul>
    </div>
  );
};

export default StartSection;
