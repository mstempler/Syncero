import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <>
            <footer className="footer">
                   <div className="custom-container">
                    <div className="row footer-row">
                   <div className="col-lg-3">
                    <h4>Syncero<br></br>
                    Consider it done.</h4>
                    <ul class="footer-menu">
        <li class="footer-item"><Link to="/">About</Link></li>
        <li class="footer-item"><Link to="/">Partner with us</Link></li>
        <li class="footer-item"><Link to="/">For developers</Link></li>
        <li class="footer-item"><Link to="/">Careers</Link></li>
        <li class="footer-item"><Link to="/">Press</Link></li>
        <li class="footer-item"><Link to="/">Blog</Link></li>
        <li class="footer-item social d=flex"><Link to="/"><svg aria-label="Instagram" height="18" width="18" fill="currentColor" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg"><path d="M13.908 1A3.096 3.096 0 0117 4.092v9.816a3.095 3.095 0 01-3.092 3.09H4.092A3.094 3.094 0 011 13.909V4.092A3.095 3.095 0 014.092 1h9.816zM5.215 7.549H2.94v5.963c0 .77.654 1.395 1.459 1.395h9.346c.804 0 1.459-.626 1.459-1.395V7.55H12.93c.197.462.308.966.308 1.495 0 2.195-1.868 3.982-4.165 3.982-2.297 0-4.164-1.787-4.164-3.982 0-.53.11-1.033.306-1.495zm3.857-1.226c-.818 0-1.542.405-1.988 1.022a2.435 2.435 0 00-.464 1.43c0 1.353 1.1 2.453 2.452 2.453 1.353 0 2.454-1.1 2.454-2.452 0-.534-.174-1.028-.465-1.43a2.45 2.45 0 00-1.989-1.023zm6.133-3.68l-.32.002-2.133.007.008 2.444 2.445-.008V2.644z"></path></svg></Link>
        <Link to="/"><svg aria-label="Twitter" height="18" width="18" fill="none" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg"><path d="M10.412 7.84l5.526-6.419h-1.31L9.83 6.994 5.998 1.421h-4.42l5.795 8.427-5.794 6.73h1.31l5.066-5.884 4.047 5.885h4.42l-6.01-8.74zM8.62 9.922l-.588-.84L3.36 2.406H5.37l3.77 5.389.587.84 4.9 7.004h-2.01l-4-5.716z" fill="#000"></path></svg></Link>
        <Link to="/"><svg aria-label="Pinterest" height="18" width="18" fill="currentColor" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg"><path d="M9.568 1C5.202 1 3 4.13 3 6.741c0 1.581.598 2.987 1.882 3.51.21.087.399.004.46-.23.042-.16.143-.567.188-.737.061-.23.037-.31-.133-.512-.37-.436-.607-1.001-.607-1.802 0-2.322 1.738-4.402 4.525-4.402 2.468 0 3.824 1.508 3.824 3.522 0 2.65-1.172 4.887-2.913 4.887-.962 0-1.681-.795-1.45-1.77.275-1.165.81-2.42.81-3.262 0-.752-.404-1.38-1.239-1.38-.983 0-1.772 1.017-1.772 2.38 0 .867.293 1.454.293 1.454l-1.182 5.008c-.351 1.486-.053 3.308-.028 3.491.015.11.155.136.219.054.09-.119 1.261-1.564 1.659-3.008.113-.409.646-2.526.646-2.526.32.61 1.253 1.145 2.245 1.145 2.954 0 4.959-2.693 4.959-6.298C15.386 3.54 13.077 1 9.568 1z"></path></svg></Link>
        <Link to="/"><svg aria-label="Facebook" height="18" width="18" fill="currentColor" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg"><path d="M11 7h3v3h-3v7H8v-7H5V7h3V5.745c0-1.189.374-2.691 1.118-3.512C9.862 1.41 10.791 1 11.904 1H14v3h-2.1c-.498 0-.9.402-.9.899V7z"></path></svg></Link>
        </li>
    </ul>
                    </div>
                    <div className="col-lg-3">
                    <h4>Customer</h4>
                    <ul class="footer-menu">
                    <li class="footer-item"><Link to="/">How to use Syncero</Link></li>
    <li class="footer-item"><Link to="/">Sign up</Link></li>
    <li class="footer-item"><Link to="/">Get the app</Link></li>
    <li class="footer-item"><Link to="/">Services near me</Link></li>
    <li class="footer-item"><Link to="/">Cost estimates</Link></li>
    <li class="footer-item"><Link to="/">Home resource center</Link></li>
    <li class="footer-item"><Link to="/">Home inspiration pictures</Link></li>
                        </ul>
                    </div>
                    <div className="col-lg-3">
                    <h4>Pros</h4>
                    <ul class="footer-menu">
    <li class="footer-item"><Link to="/">How to use Syncero</Link></li>
    <li class="footer-item"><Link to="/">Sign up</Link></li>
    <li class="footer-item"><Link to="/">Get the app</Link></li>
    <li class="footer-item"><Link to="/">Services near me</Link></li>
    <li class="footer-item"><Link to="/">Cost estimates</Link></li>
    <li class="footer-item"><Link to="/">Home resource center</Link></li>
    <li class="footer-item"><Link to="/">Home inspiration pictures</Link></li>
</ul>
                    </div>
                    <div className="col-lg-3">
                    <h4>Support</h4>
                    <ul class="footer-menu">
    <li class="footer-item"><Link to="/">Help</Link></li>
    <li class="footer-item"><Link to="/">Safety</Link></li>
    <li class="footer-item"><Link to="/">Terms of Use</Link></li>
    <li class="footer-item"><Link to="/">Privacy Policy</Link></li>
    <li class="footer-item"><Link to="/">CA Notice at Collection</Link></li>
    <li class="footer-item"><Link to="/">Do not Sell or Share My Personal Information</Link></li>
</ul>
                    </div>

                    </div>
                    <div className="row mobilefooter-row">
                        <div className="col-lg-12">
                    <div className="col-lg-12">
                        <div className="footer-accordion">
  <h4 data-bs-toggle="collapse" data-bs-target="#SynceroAccordion" aria-expanded="false" aria-controls="SynceroAccordion">
    Syncero Consider it done.
  </h4>
  <svg height="18" width="18" fill="currentColor" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg"><path d="M14.646 6.764L9 13 3.311 6.725a1 1 0 011.342-1.482L9 10l4.285-4.699c.2-.187.435-.301.715-.301a1 1 0 011 1c0 .306-.151.537-.354.764z"></path></svg>
  </div>
  <div id="SynceroAccordion" className="collapse">
    <ul className="footer-menu">
      <li className="footer-item"><Link to="/">About</Link></li>
      <li className="footer-item"><Link to="/">Partner with us</Link></li>
      <li className="footer-item"><Link to="/">For developers</Link></li>
      <li className="footer-item"><Link to="/">Careers</Link></li>
      <li className="footer-item"><Link to="/">Press</Link></li>
      <li className="footer-item"><Link to="/">Blog</Link></li>
      <li className="footer-item social d-flex">
        <Link to="/"><svg aria-label="Instagram" height="18" width="18" fill="currentColor" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg"><path d="M13.908 1A3.096 3.096 0 0117 4.092v9.816a3.095 3.095 0 01-3.092 3.09H4.092A3.094 3.094 0 011 13.909V4.092A3.095 3.095 0 014.092 1h9.816zM5.215 7.549H2.94v5.963c0 .77.654 1.395 1.459 1.395h9.346c.804 0 1.459-.626 1.459-1.395V7.55H12.93c.197.462.308.966.308 1.495 0 2.195-1.868 3.982-4.165 3.982-2.297 0-4.164-1.787-4.164-3.982 0-.53.11-1.033.306-1.495zm3.857-1.226c-.818 0-1.542.405-1.988 1.022a2.435 2.435 0 00-.464 1.43c0 1.353 1.1 2.453 2.452 2.453 1.353 0 2.454-1.1 2.454-2.452 0-.534-.174-1.028-.465-1.43a2.45 2.45 0 00-1.989-1.023zm6.133-3.68l-.32.002-2.133.007.008 2.444 2.445-.008V2.644z"></path></svg></Link>
        <Link to="/"><svg aria-label="Twitter" height="18" width="18" fill="none" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg"><path d="M10.412 7.84l5.526-6.419h-1.31L9.83 6.994 5.998 1.421h-4.42l5.795 8.427-5.794 6.73h1.31l5.066-5.884 4.047 5.885h4.42l-6.01-8.74zM8.62 9.922l-.588-.84L3.36 2.406H5.37l3.77 5.389.587.84 4.9 7.004h-2.01l-4-5.716z" fill="#000"></path></svg></Link>
        <Link to="/"><svg aria-label="Pinterest" height="18" width="18" fill="currentColor" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg"><path d="M9.568 1C5.202 1 3 4.13 3 6.741c0 1.581.598 2.987 1.882 3.51.21.087.399.004.46-.23.042-.16.143-.567.188-.737.061-.23.037-.31-.133-.512-.37-.436-.607-1.001-.607-1.802 0-2.322 1.738-4.402 4.525-4.402 2.468 0 3.824 1.508 3.824 3.522 0 2.65-1.172 4.887-2.913 4.887-.962 0-1.681-.795-1.45-1.77.275-1.165.81-2.42.81-3.262 0-.752-.404-1.38-1.239-1.38-.983 0-1.772 1.017-1.772 2.38 0 .867.293 1.454.293 1.454l-1.182 5.008c-.351 1.486-.053 3.308-.028 3.491.015.11.155.136.219.054.09-.119 1.261-1.564 1.659-3.008.113-.409.646-2.526.646-2.526.32.61 1.253 1.145 2.245 1.145 2.954 0 4.959-2.693 4.959-6.298C15.386 3.54 13.077 1 9.568 1z"></path></svg></Link>
        <Link to="/"><svg aria-label="Facebook" height="18" width="18" fill="currentColor" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg"><path d="M11 7h3v3h-3v7H8v-7H5V7h3V5.745c0-1.189.374-2.691 1.118-3.512C9.862 1.41 10.791 1 11.904 1H14v3h-2.1c-.498 0-.9.402-.9.899V7z"></path></svg></Link>
      </li>
    </ul>
  </div>
</div>

                    <div className="col-lg-12">
                        <div className="footer-accordion">
  <h4 data-bs-toggle="collapse" data-bs-target="#customerAccordion" aria-expanded="false" aria-controls="customerAccordion">
    Customer
  </h4>
  <svg height="18" width="18" fill="currentColor" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg"><path d="M14.646 6.764L9 13 3.311 6.725a1 1 0 011.342-1.482L9 10l4.285-4.699c.2-.187.435-.301.715-.301a1 1 0 011 1c0 .306-.151.537-.354.764z"></path></svg>
  </div>
  <div id="customerAccordion" className="collapse">
    <ul className="footer-menu">
      <li className="footer-item"><Link to="/">How to use Syncero</Link></li>
      <li className="footer-item"><Link to="/">Sign up</Link></li>
      <li className="footer-item"><Link to="/">Get the app</Link></li>
      <li className="footer-item"><Link to="/">Services near me</Link></li>
      <li className="footer-item"><Link to="/">Cost estimates</Link></li>
      <li className="footer-item"><Link to="/">Home resource center</Link></li>
      <li className="footer-item"><Link to="/">Home inspiration pictures</Link></li>
    </ul>
  </div>
</div>

                    <div className="col-lg-12">
                        <div className="footer-accordion">
  <h4 data-bs-toggle="collapse" data-bs-target="#prosAccordion" aria-expanded="false" aria-controls="prosAccordion">
    Pros
  </h4>
  <svg height="18" width="18" fill="currentColor" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg"><path d="M14.646 6.764L9 13 3.311 6.725a1 1 0 011.342-1.482L9 10l4.285-4.699c.2-.187.435-.301.715-.301a1 1 0 011 1c0 .306-.151.537-.354.764z"></path></svg>
  </div>
  <div id="prosAccordion" className="collapse">
    <ul className="footer-menu">
      <li className="footer-item"><Link to="/">How to use Syncero</Link></li>
      <li className="footer-item"><Link to="/">Sign up</Link></li>
      <li className="footer-item"><Link to="/">Get the app</Link></li>
      <li className="footer-item"><Link to="/">Services near me</Link></li>
      <li className="footer-item"><Link to="/">Cost estimates</Link></li>
      <li className="footer-item"><Link to="/">Home resource center</Link></li>
      <li className="footer-item"><Link to="/">Home inspiration pictures</Link></li>
    </ul>
  </div>
</div>

                    <div className="col-lg-12">
                        
                    <div className="footer-accordion">
  <h4 data-bs-toggle="collapse" data-bs-target="#supportAccordion" aria-expanded="false" aria-controls="supportAccordion">
    Support
  </h4>
  <svg height="18" width="18" fill="currentColor" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg"><path d="M14.646 6.764L9 13 3.311 6.725a1 1 0 011.342-1.482L9 10l4.285-4.699c.2-.187.435-.301.715-.301a1 1 0 011 1c0 .306-.151.537-.354.764z"></path></svg>
  </div>
  <div id="supportAccordion" className="collapse">
    <ul className="footer-menu">
      <li className="footer-item"><Link to="/">Help</Link></li>
      <li className="footer-item"><Link to="/">Safety</Link></li>
      <li className="footer-item"><Link to="/">Terms of Use</Link></li>
      <li className="footer-item"><Link to="/">Privacy Policy</Link></li>
      <li className="footer-item"><Link to="/">CA Notice at Collection</Link></li>
      <li className="footer-item"><Link to="/">Do not Sell or Share My Personal Information</Link></li>
    </ul>
  </div>
</div>
                        </div>
                        </div>
                    
                    <div className="footer-bottom">
                    <div className="text-section col-md-4">
                    <img src="/images/co-logo.png" />
                    <p>© 2025 Syncero, Inc.  </p>
                        </div>
                        <div className="text-section1 col-md-4">
                        <img src="/images/black-logo.png" />
                        <p>Syncero Guarantee</p>
                            </div>
                    </div> 
</div>

            </footer>
           
            </>
    );
}
export default Footer;