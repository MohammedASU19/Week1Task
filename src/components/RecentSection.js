import React from 'react';

const RecentSection = () => {
  return (
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
  );
};

export default RecentSection;
