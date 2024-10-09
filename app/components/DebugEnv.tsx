import React from 'react';

const DebugEnv = () => {
  return (
    <div>
      <p>Base URL: {process.env.NEXT_PUBLIC_BASE_URL}</p>
    </div>
  );
};

export default DebugEnv;