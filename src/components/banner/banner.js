import React from "react";
import './banner.css';
import { Link } from "react-router-dom";



const Banner = () => {
    return (
        <>
        <section className="banner">
            <div className="custom-container">
                <div className="row">
                    <div className="col-lg-8 col-md-12 col-sm-12 banner-text">
                    <img src="/images/black-logo.png" />

                        <div class="homepage-hero">
                            <h1 class=" homepage-hero_heavy">
                                Home&nbsp;
                                <div class="homepage-hero_textCarousel">
                                <ul class="homepage-hero_scroll">
                                    <li>improvement,</li>
                                    <li>repair,</li>
                                    <li>inspection,</li>
                                    <li>cleaning,</li>
                                    <li>improvement,</li>
                                </ul>
                                </div>
                                <br />made easy.
                            </h1>
                        </div>
                       <div className="banner-link">
                            <Link to={"/"} className="link1">HIRE A PRO</Link>
                            <Link to={"/"} className="link2">FIND CUSTOMERS</Link>

                       </div>
                       <div className="banner-search">
                       
                       <input aria-label="Search on Syncero" role="combobox" aria-controls="search-dropdown-dweb" aria-expanded="false" class="search-input" data-test="search-input" placeholder="Describe your project or problem —&nbsp;be as detailed as you’d like." value=""></input>
                       <hr />
                       <input name="zip_code" aria-label="Zip code" class="zip-input" placeholder="Zip code" pattern="[0-9]*" inputmode="numeric" maxlength="5" autocomplete="postal-code" value=""></input>
                       <button class="search-btn" data-test="search-button" aria-label="Search" type="button">Search</button>
                   </div>
                   <p className="try-text">Try: My  <Link to={"/"} className="try"> kitchen sink is leaking</Link> or  <Link to={"/"}  className="try">I want to repaint my living room</Link></p>
                    </div>
                    <div className="col-lg-4 col-md-12 col-sm-12 img-baner">
                    <img 
        src="/images/640.webp" 
        alt="Banner" 
        style={{ width: '100%', height: 'auto' }} 
      />
                    </div>
                </div>
                <div class="black"><a href="#mm"><svg height="28" width="28" fill="currentColor" viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg"><path d="M6.354 16.764L14 25l7.689-8.275a1 1 0 00-1.342-1.482L15 20.75V4.002A1 1 0 1013 4v16.75l-5.285-5.449A1.026 1.026 0 007 15a1 1 0 00-1 1c0 .306.151.537.354.764z"></path></svg></a></div>
                </div>

        </section>
        </>
    );
};
export default Banner;