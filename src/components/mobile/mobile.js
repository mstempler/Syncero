import React from "react";
import './mobile.css';



const Mobile = () => {
    return (
        <>
           <div className="mobile" id="mm">
            <div className="custom-container">
                <div className="row">
                    <div className="col-md-6 mobile-text">
                    <h2>
  The one app you need to <br />get <span className="blue">everything done</span>
</h2>
<p>From custom guides made just for you to effortless<br/> project planning, it’s all here — in one free app.</p>

<div className="mobile-btn">
                            <a href="#" className="">
                                <img src="/images/play.png" alt="play" />

                            </a>
                            <a href="#" className="">
                                <img src="/images/120.png" alt="Apple" />
                                
                            </a>
                        </div>
                        </div>
                        
                    <div className="col-md-6">
                        <img src="/images/400.png" alt="Mobile" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default Mobile;