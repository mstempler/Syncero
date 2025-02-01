import React from "react";
import './hire.css';

const Hire = () => {

       
    return (
       <>
       <div className="custom-container">
        <div className="row hire">
            <h4>Why hire professionals on Syncero?</h4>
            <div className="col-md-4 hire-box">
            <svg height="28" width="28" fill="currentColor" viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg"><path d="M14 24C8.485 24 4 19.514 4 14S8.485 4 14 4c5.514 0 9.999 4.486 9.999 10S19.514 24 14 24zm0-22C7.383 2 2 7.383 2 14s5.383 12 12 12c6.616 0 11.999-5.383 11.999-12S20.616 2 14 2zm1 11h-2a1 1 0 110-2h3a1 1 0 100-2h-1V8a1 1 0 10-2 0v1c-1.654 0-3 1.346-3 3s1.346 3 3 3h2a1 1 0 010 2h-3.5c-.554 0-1 .447-1 1 0 .553.446 1 1 1H13v1a1 1 0 102 0v-1a3.003 3.003 0 002.999-3c0-1.654-1.346-3-2.999-3z"></path></svg>
            <h5>Free to use</h5>
            <p>You never pay to use Syncero: Get cost estimates, contact pros, and even book the job—all for no cost.</p>
            </div>
            <div className="col-md-4 hire-box">
            <svg height="28" width="28" fill="currentColor" viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg"><path d="M19 17a1 1 0 100 2c2.757 0 5 1.963 5 4.375V24a1 1 0 102 0v-.625C26 19.859 22.86 17 19 17zm-1-7c0-1.654 1.346-3 3-3s3 1.346 3 3-1.346 3-3 3-3-1.346-3-3zm8 0c0-2.757-2.243-5-5-5s-5 2.243-5 5 2.243 5 5 5 5-2.243 5-5zM9.5 5C11.43 5 13 6.57 13 8.5S11.43 12 9.5 12 6 10.43 6 8.5 7.57 5 9.5 5zm0 9c3.033 0 5.5-2.468 5.5-5.5S12.533 3 9.5 3A5.506 5.506 0 004 8.5C4 11.532 6.467 14 9.5 14zm0 2C5.364 16 2 18.859 2 22.375V24a1 1 0 102 0v-1.625C4 19.963 6.467 18 9.5 18s5.5 1.963 5.5 4.375V24a1 1 0 102 0v-1.625C17 18.859 13.636 16 9.5 16z"></path></svg>
            <h5>Compare prices side-by-side</h5>
            <p>You’ll know how much your project costs even before booking a pro.</p>
            </div>
            <div className="col-md-4 hire-box">
            <svg height="28" width="28" fill="currentColor" viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg"><path d="M21.6 6.2a.998.998 0 00-1.399.2l-8.38 11.175-4.197-3.356a1.002 1.002 0 00-1.406.156 1.003 1.003 0 00.156 1.406l5.806 4.644L21.8 7.6a1 1 0 00-.2-1.4z"></path></svg>
                <h5>
                Hire with confidence
                </h5>
                <p>
                With access to 1M+ customer reviews and the pros’ work history, you’ll have all the info you need to make a hire.
                </p>
            </div>
        </div>
        <div className="row">
            <a href="" className="btn-hire"> Get Started</a>
        </div>
       </div>
       </>
    );
};
export default Hire