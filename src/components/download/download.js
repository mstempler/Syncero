import React from "react";
import './download.css';
const Download = () => {
    return (
        <>
         <div className="mobile download" >
            <div className="custom-container">
                <div className="row">
                    <div className="col-md-6 mobile-text">
                    <h2>
                    Get the app.<br />  
                    Get stuff done.
</h2>
<p>Keep track of home projects and reach out to pros, right <br /> in the app.</p>

<div className="mobile-btn">
                            <a href="#" className="">
                                <img src="/images/play.png" alt="play" />

                            </a>
                            <a href="#" className="">
                                <img src="/images/120.png" alt="Apple" />
                                
                            </a>
                        </div>
                        </div>
                        
                    <div className="col-md-6 d-mobile">
                        <img src="/images/mbapp.webp" alt="Mobile" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default Download;