import React from "react";
import './work.css';

const Work = () => {

       
    return (
       <>
       <div className="custom-container">
        <div className="row work">
            <h4>How it works.</h4>
            <div className="col-md-4 work-box">
            <img  src="images/work1.webp"   className="col-12" />
            <h5>Search.</h5>
            <p>Browse profiles, see prices and use filters to find pros who match your project.</p>
            </div>
            <div className="col-md-4 work-box">
            <img  src="images/work2.webp"  className="col-12" />
            <h5>Chat</h5>
            <p>Contact the pros you like to discuss project details.</p>
            </div>
            <div className="col-md-4 work-box">
           <img  src="images/work3.webp" className="col-12" />
                <h5>
                Hire 
                </h5>
                <p>
                Check pro availability and book appointments right in the app.
                </p>
            </div>
        </div>
        
       </div>
       </>
    );
};
export default Work