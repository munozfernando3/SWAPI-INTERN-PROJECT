import React from 'react';
const Loading: React.FC = () => {
  return (<div className="d-flex justify-content-center align-items-center vh-100">
  <div className="spinner-border text-primary" style={{ width: '3rem', height: '3rem' }} role="status">
    <span className="sr-only"></span>
  </div></div>);
};
export default Loading;