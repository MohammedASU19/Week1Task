import React from 'react';

const Tab = ({ name }) => {
  return (
    <div style={{ padding: '8px 16px', background: '#1e1e1e', color: 'white', borderRight: '1px solid #333' }}>
      {name}
    </div>
  );
};

export default Tab;
