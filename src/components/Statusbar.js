import React from 'react';
import './Statusbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle, faExclamationTriangle, faInfoCircle, faBroadcastTower, faBell } from '@fortawesome/free-solid-svg-icons';

const Statusbar = () => {
  return (
    <div className="status-bar">
      <div className="status-bar-left">
        <FontAwesomeIcon icon={faTimesCircle} className="status-icon" />
        <span className="status-count">0</span>
        <FontAwesomeIcon icon={faExclamationTriangle} className="status-icon" />
        <span className="status-count">0</span>
        <FontAwesomeIcon icon={faInfoCircle} className="status-icon" />
        <span className="status-count">0</span>
        <FontAwesomeIcon icon={faBroadcastTower} className="status-icon" />
        <span className="status-count">0</span>
      </div>
      <div className="status-bar-right">
        <FontAwesomeIcon icon={faBroadcastTower} className="status-icon" />
        <span className="status-text">Go Live</span>
        <FontAwesomeIcon icon={faBell} className="status-icon" />
      </div>
    </div>
  );
};

export default Statusbar;
