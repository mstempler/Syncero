import React from "react";
import  './video.css'
const Video = () => {
    return (
      <>
      <div className="video-sec">
        <div className="custom-container">
            <div className="row">
                <h5>Price out projects.</h5>
                <p>How much should home maintenance projects really cost? Syncero pros break it down.

</p>

<iframe class="aspect-ratio-object video col-12" width="100%" height="100%" allowfullscreen="true" src="https://player.vimeo.com/video/356056651?autoplay=1&amp;playsinline=1" frameborder="0"></iframe>

<div className="col-12 text-end">
<a href="" className="link-see">See All <svg height="18" width="18" fill="#009fd9" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg"><path d="M9.764 14.646L16 9 9.725 3.311a1 1 0 00-1.482 1.342L11.75 8H3.002A1 1 0 103 10h8.75l-3.449 3.285c-.187.2-.301.435-.301.715a1 1 0 001 1c.306 0 .537-.151.764-.354z"></path></svg></a>
</div>
            </div>
        </div>
      </div>
        </>
        );
        };
export default Video