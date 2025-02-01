import React from "react";
import './garden.css';
import { Link } from "react-router-dom";


const Garden = ({
  title,
  description,
  buttonText,
  buttonLink,
  backgroundUrl
}) => {
  return (
    <div
      className="garden"
      style={{ backgroundImage: `url(${backgroundUrl})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <div className="custom-container">
        <div className="row">
          {/* Text Section */}
          <div className="col-md-6 garden-text">
            <h4>{title}</h4>
            <p>{description}</p>
            <Link to={buttonLink} className="essential-banner-btn">
              {buttonText}
            </Link>
          </div>

          {/* Image Section */}
          <div className="col-md-6 garden-img">
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default Garden;
