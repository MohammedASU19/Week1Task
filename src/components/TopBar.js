import React from 'react';
import './TopBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight, faSearch } from '@fortawesome/free-solid-svg-icons';

const TopBar = () => {
  return (
    <div className="top-bar">
      <div className="top-bar-left">
        <img src="https://icons.veryicon.com/png/o/business/vscode-program-item-icon/vscode.png" alt="VSCode Logo" className="vscode-logo" />
        <span>File</span>
        <span>Edit</span>
        <span>Selection</span>
        <span>View</span>
        <span>Go</span>
        <span>Run</span>
        <span>Terminal</span>
        <span>Help</span>
      </div>
      <div className="top-bar-center">
        <FontAwesomeIcon icon={faArrowLeft} className="fa-icon" />
        <FontAwesomeIcon icon={faArrowRight} className="fa-icon" />
        <div className="search-bar">
          <FontAwesomeIcon icon={faSearch} className="search-icon" />
          <input type="text" placeholder="Search" />
        </div>
      </div>
      <div className="top-bar-right">
        <div className="window-icon minimize">—</div>
        <div className="window-icon maximize">▢</div>
        <div className="window-icon close">×</div>
      </div>
    </div>
  );
};

export default TopBar;
