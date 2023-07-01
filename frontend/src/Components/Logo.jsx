import React from 'react';
import fortuna from '../../src/media/FortunaMedia.png';
import '../Css/Logo.scss';
const Logo = () => {
  return (
    <div className="logo">
      <img src={fortuna} alt="fortuna logo" />
    </div>
  );
};

export default Logo;
