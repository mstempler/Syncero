import React from "react";
import './trending.css';
import { Link } from "react-router-dom";
// Using Swiper with modules
const Trending = () => {
  return (
    <>
    <div className="trending">
        <div className="custom-container">
            <div className="row">
                <h4>Trending now in these areas.</h4>
                <ul className="trending-list">
                <li class="trending-item"><Link to="/">Atlanta</Link></li>
  <li class="trending-item"><Link to="/">Boston</Link></li>
  <li class="trending-item"><Link to="/">Dallas</Link></li>
  <li class="trending-item"><Link to="/">Denver</Link></li>
  <li class="trending-item"><Link to="/">Houston</Link></li>
  <li class="trending-item"><Link to="/">Miami</Link></li>
  <li class="trending-item"><Link to="/">Phoenix</Link></li>
  <li class="trending-item"><Link to="/">San Francisco</Link></li>
  <li class="trending-item"><Link to="/">Seattle</Link></li>
  <li class="trending-item"><Link to="/">Washington DC</Link></li>
                    </ul>
                    <div className=" trends col-12">
                    <div className="col-lg-4 col-md-12 col-sm-12">
                        <img className="trend-banner" src="/images/trend-banner.png" alt="trending" />
                        </div>
                        <div className="col-lg-4 col-md-12 col-sm-12">
                            <div className="trend-content">
                                <h5>All 50 states.</h5>
                                <p className=""> There’s nothing worse than getting your hopes up, then not being able to find what you want. That won’t happen on Syncero. From big cities to small towns, we’ve got pros covering every county in the U.S.</p>
                                <Link to="/" className="btn-trend">View All States </Link>
                            </div>
                        </div>
                        </div>
            </div>
        </div>
        </div>
    </>
  );
};
export default Trending;