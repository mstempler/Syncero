import React from "react";
import './essential-banner.css';

const Essentialbanner = ({ 
  backgroundUrl, 
  title, 
  description, 
  buttonText, 
  onButtonClick 
}) => {
  return (
    <div 
      className="essential-banner" 
      style={{ backgroundImage: `url(${backgroundUrl})` }}
    >
      <div className="custom-container">
        <div className="row">
          <div className="col-md-6">
            <div className="essential-banner-content">
              <svg 
                height="28" 
                width="28" 
                fill="#009fd9" 
                viewBox="0 0 28 28" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M23 2a1 1 0 011 1v6.89l1.633 1.337a.999.999 0 11-1.266 1.547l-.367-.3V23c0 1.654-1.346 3-3 3H7c-1.654 0-3-1.346-3-3V12.474l-.367.3a1 1 0 11-1.266-1.547l11-9a.998.998 0 011.266 0L18 4.981V3a1 1 0 011-1h4zm-9 2.292l-8 6.546V23c0 .551.45 1 1 1h14c.551 0 1-.449 1-1V10.838l-8-6.546zM17 12a1 1 0 011 1v6a1 1 0 01-1 1h-6a1 1 0 01-1-1v-6a1 1 0 011-1h6zm-1 2h-4v4h4v-4zm6-10h-2v2.617l2 1.636V4z"></path>
              </svg>
              <h2 dangerouslySetInnerHTML={{ __html: title }}></h2>
              <p>{description}</p>
              <a 
                className="essential-banner-btn" 
                onClick={onButtonClick}
              >
                {buttonText}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Essentialbanner;
