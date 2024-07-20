import React from 'react';
import './MainContent.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFile, faFolderOpen, faFolder, faCodeBranch, faPlug } from '@fortawesome/free-solid-svg-icons';

const MainContent = () => {
  return (
    <div className="main-content">
      <div className="start-section">
        <h2>Start</h2>
        <ul>
          <li>
            <FontAwesomeIcon icon={faFile} className="icon" />
            <span className="app-name">New File</span>
          </li>
          <li>
            <FontAwesomeIcon icon={faFolderOpen} className="icon" />
            <span className="app-name">Open File</span>
          </li>
          <li>
            <FontAwesomeIcon icon={faFolder} className="icon" />
            <span className="app-name">Open Folder</span>
          </li>
          <li>
            <FontAwesomeIcon icon={faCodeBranch} className="icon" />
            <span className="app-name">Clone Git Repository</span>
          </li>
          <li>
            <FontAwesomeIcon icon={faPlug} className="icon" />
            <span className="app-name">Connect to...</span>
          </li>
        </ul>
      </div>
      <div className="recent-section">
        <h2>Recent</h2>
        <ul>
          <li>
            <span className="app-name">MyApplication 1</span>
            <span className="app-path">C:\Users\SolidSoft\Desktop</span>
          </li>
          <li>
            <span className="app-name">MyApplication 2</span>
            <span className="app-path">C:\Users\SolidSoft\Desktop</span>
          </li>
          <li>
            <span className="app-name">MyApplication 3</span>
            <span className="app-path">C:\Users\SolidSoft\Desktop</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MainContent;
