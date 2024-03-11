import '@fortawesome/fontawesome-free/css/all.css';
import React from 'react';

export const SkipButton: React.FC<IntroAppProps>=({skipIntro})=>{
return (
  <button onClick={skipIntro} className="skip-button"><i className="fa fa-fast-forward"></i>
</button>
);
};