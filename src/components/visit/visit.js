import React from "react";
import './visit.css';
import { Link } from "react-router-dom";

// Using Swiper with modules
const Visit = () => {
  return (
    <>
    <div className="visit">
        <div className="custom-container">
            <div className="row">
                <div className="visit-banner">
                    <h3>Visit our Home Resource Center
                    </h3>
                    <p className="col-md-12">Sometimes getting started is the hardest part. Our resource center has project guides, cost estimates and how-to guides to help you kick off your next home project.</p>
                   <Link to={"/"} className="btn-visit">See More</Link>
                    </div>
                
                </div>
            </div>
        </div> 
        <div className="business">
            <div className="custom-container">
                <div className="row">
                <div className=" trends col-12">
                    <div className="col-lg-4 col-md-12 col-sm-12">
                        <img className="trend-banner" src="/images/business.png" alt="trending" />
                        </div>
                        <div className="col-lg-4 col-md-12 col-sm-12">
                            <div className="trend-content">
                                <h5>
                                Open for business.</h5>
                                <p className=" mb-6"> Whatever work you do, we’ll find you the jobs you want.</p>
                                <Link to={"/"}className="btn-visit1 mt-4">Become a Syncero pro </Link>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
        </div>
    </>
  );
};
export default Visit;