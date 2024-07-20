import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faFolderOpen, faCog, faPlay, faUser, faFileAlt } from '@fortawesome/free-solid-svg-icons';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul>
        <li>
          <FontAwesomeIcon icon={faFileAlt} />
        </li>
        <li>
          <FontAwesomeIcon icon={faSearch} />
        </li>
        <li>
          <FontAwesomeIcon icon={faCog} />
        </li>
        <li>
          <FontAwesomeIcon icon={faFolderOpen} />
        </li>
        <li>
          <FontAwesomeIcon icon={faPlay} />
        </li>
        <li>
          <FontAwesomeIcon icon={faUser} />
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
