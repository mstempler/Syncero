import React from "react";
import './cost.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation} from 'swiper/modules';
import { Link } from "react-router-dom";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
const Cost = () => {
    return (
        <>
        <div className="cost">
            <div className="custom-container">
                <div className="row slider-pr">
                    <h2>Get free cost estimates.</h2>
                    <p className="col-md-6">
                    We analyzed millions of bids from Syncero professionals to see what things really cost. Find out what other people have paid for projects like yours.

                    </p>
                    <Swiper
                                  
                                    spaceBetween={15}
                                    slidesPerView={3}
                                    onSlideChange={() => console.log('slide change')}
                                    onSwiper={(swiper) => console.log(swiper)}
                                     modules={[Navigation]}
                                     navigation
                                    breakpoints={{
                                        // when window width is >= 320px
                                        320: {
                                          slidesPerView: 1,
                                          spaceBetween: 10,
                                        },
                                        // when window width is >= 640px
                                        640: {
                                          slidesPerView: 2,
                                          spaceBetween: 15,
                                        },
                                        // when window width is >= 1024px
                                        1024: {
                                          slidesPerView: 3,
                                          spaceBetween: 15,
                                        },
                                      }}
                                  >
                                   
                                    <SwiperSlide>
                                    <Link to="/instant-result">
                                        <div className="slider-project">
                                        <img src="/images/c1.webp" alt="project" />
                                        <h5>House Cleaning</h5>
                                        <span><svg height="18" width="18" fill="currentColor" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg"><path d="M9 15c-3.309 0-6-2.691-6-6s2.691-6 6-6c3.31 0 6 2.691 6 6s-2.69 6-6 6zM9 1C4.589 1 1 4.589 1 9s3.589 8 8 8 8-3.589 8-8-3.589-8-8-8zm.75 7.25h-1.5a.752.752 0 01-.75-.75c0-.413.337-.75.75-.75h2.25a.75.75 0 000-1.5h-.75V5a.75.75 0 00-1.5 0v.25C7.01 5.25 6 6.26 6 7.5s1.01 2.25 2.25 2.25h1.5c.413 0 .75.337.75.75s-.337.75-.75.75H7.5a.75.75 0 000 1.5h.764c-.002.022-.014.044-.014.068V13a.75.75 0 001.5 0v-.182c0-.024-.012-.046-.014-.068h.014c1.24 0 2.25-1.01 2.25-2.25s-1.01-2.25-2.25-2.25z"></path></svg>Avg. price: <b>70</b>-<b>130</b></span>
                                        </div>
                                        </Link>
                                        </SwiperSlide>
                                    <SwiperSlide>
                                    <Link to="/instant-result">
                                         <div className="slider-project">
                                        <img src="/images/c2.webp" alt="project" />
                                        <h5>Phone or Tablet Repair</h5>
                                        <span><svg height="18" width="18" fill="currentColor" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg"><path d="M9 15c-3.309 0-6-2.691-6-6s2.691-6 6-6c3.31 0 6 2.691 6 6s-2.69 6-6 6zM9 1C4.589 1 1 4.589 1 9s3.589 8 8 8 8-3.589 8-8-3.589-8-8-8zm.75 7.25h-1.5a.752.752 0 01-.75-.75c0-.413.337-.75.75-.75h2.25a.75.75 0 000-1.5h-.75V5a.75.75 0 00-1.5 0v.25C7.01 5.25 6 6.26 6 7.5s1.01 2.25 2.25 2.25h1.5c.413 0 .75.337.75.75s-.337.75-.75.75H7.5a.75.75 0 000 1.5h.764c-.002.022-.014.044-.014.068V13a.75.75 0 001.5 0v-.182c0-.024-.012-.046-.014-.068h.014c1.24 0 2.25-1.01 2.25-2.25s-1.01-2.25-2.25-2.25z"></path></svg>Avg. price: <b>70</b>-<b>130</b></span>
                                        </div>
                                        </Link>
                                        </SwiperSlide>
                                    <SwiperSlide> 
                                    <Link to="/instant-result">
                                        <div className="slider-project">
                                        <img src="/images/c3.webp" alt="project" />
                                        <h5>New Home Construction</h5>
                                        <span><svg height="18" width="18" fill="currentColor" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg"><path d="M9 15c-3.309 0-6-2.691-6-6s2.691-6 6-6c3.31 0 6 2.691 6 6s-2.69 6-6 6zM9 1C4.589 1 1 4.589 1 9s3.589 8 8 8 8-3.589 8-8-3.589-8-8-8zm.75 7.25h-1.5a.752.752 0 01-.75-.75c0-.413.337-.75.75-.75h2.25a.75.75 0 000-1.5h-.75V5a.75.75 0 00-1.5 0v.25C7.01 5.25 6 6.26 6 7.5s1.01 2.25 2.25 2.25h1.5c.413 0 .75.337.75.75s-.337.75-.75.75H7.5a.75.75 0 000 1.5h.764c-.002.022-.014.044-.014.068V13a.75.75 0 001.5 0v-.182c0-.024-.012-.046-.014-.068h.014c1.24 0 2.25-1.01 2.25-2.25s-1.01-2.25-2.25-2.25z"></path></svg>Avg. price: <b>70</b>-<b>130</b></span>
                                        </div>
                                        </Link>
                                        </SwiperSlide>
                                    <SwiperSlide>
                                    <Link to="/instant-result">
                                    <div className="slider-project">
                                        <img src="/images/c4.webp" alt="project" />
                                        <h5>Pet Sitting</h5>
                                        <span><svg height="18" width="18" fill="currentColor" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg"><path d="M9 15c-3.309 0-6-2.691-6-6s2.691-6 6-6c3.31 0 6 2.691 6 6s-2.69 6-6 6zM9 1C4.589 1 1 4.589 1 9s3.589 8 8 8 8-3.589 8-8-3.589-8-8-8zm.75 7.25h-1.5a.752.752 0 01-.75-.75c0-.413.337-.75.75-.75h2.25a.75.75 0 000-1.5h-.75V5a.75.75 0 00-1.5 0v.25C7.01 5.25 6 6.26 6 7.5s1.01 2.25 2.25 2.25h1.5c.413 0 .75.337.75.75s-.337.75-.75.75H7.5a.75.75 0 000 1.5h.764c-.002.022-.014.044-.014.068V13a.75.75 0 001.5 0v-.182c0-.024-.012-.046-.014-.068h.014c1.24 0 2.25-1.01 2.25-2.25s-1.01-2.25-2.25-2.25z"></path></svg>Avg. price: <b>70</b>-<b>130</b></span>
                                        </div>
                                        </Link>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                    <Link to="/instant-result">
                                    <div className="slider-project">
                                        <img src="/images/c5.webp" alt="project" />
                                        <h5>Alterations, Tailoring, and Clothing Design</h5>
                                        <span><svg height="18" width="18" fill="currentColor" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg"><path d="M9 15c-3.309 0-6-2.691-6-6s2.691-6 6-6c3.31 0 6 2.691 6 6s-2.69 6-6 6zM9 1C4.589 1 1 4.589 1 9s3.589 8 8 8 8-3.589 8-8-3.589-8-8-8zm.75 7.25h-1.5a.752.752 0 01-.75-.75c0-.413.337-.75.75-.75h2.25a.75.75 0 000-1.5h-.75V5a.75.75 0 00-1.5 0v.25C7.01 5.25 6 6.26 6 7.5s1.01 2.25 2.25 2.25h1.5c.413 0 .75.337.75.75s-.337.75-.75.75H7.5a.75.75 0 000 1.5h.764c-.002.022-.014.044-.014.068V13a.75.75 0 001.5 0v-.182c0-.024-.012-.046-.014-.068h.014c1.24 0 2.25-1.01 2.25-2.25s-1.01-2.25-2.25-2.25z"></path></svg>Avg. price: <b>70</b>-<b>130</b></span>
                                        </div>
                                        </Link>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                    <Link to="/instant-result">
                                    <div className="slider-project">
                                        <img src="/images/c6.webp" alt="project" />
                                        <h5>Central Air Conditioning Installation or Replacement</h5>
                                        <span><svg height="18" width="18" fill="currentColor" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg"><path d="M9 15c-3.309 0-6-2.691-6-6s2.691-6 6-6c3.31 0 6 2.691 6 6s-2.69 6-6 6zM9 1C4.589 1 1 4.589 1 9s3.589 8 8 8 8-3.589 8-8-3.589-8-8-8zm.75 7.25h-1.5a.752.752 0 01-.75-.75c0-.413.337-.75.75-.75h2.25a.75.75 0 000-1.5h-.75V5a.75.75 0 00-1.5 0v.25C7.01 5.25 6 6.26 6 7.5s1.01 2.25 2.25 2.25h1.5c.413 0 .75.337.75.75s-.337.75-.75.75H7.5a.75.75 0 000 1.5h.764c-.002.022-.014.044-.014.068V13a.75.75 0 001.5 0v-.182c0-.024-.012-.046-.014-.068h.014c1.24 0 2.25-1.01 2.25-2.25s-1.01-2.25-2.25-2.25z"></path></svg>Avg. price: <b>70</b>-<b>130</b></span>
                                        </div>
                                        </Link>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                    <Link to="/instant-result">
                                    <div className="slider-project">
                                        <img src="/images/c7.webp" alt="project" />
                                        <h5>Logo Design</h5>
                                        <span><svg height="18" width="18" fill="currentColor" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg"><path d="M9 15c-3.309 0-6-2.691-6-6s2.691-6 6-6c3.31 0 6 2.691 6 6s-2.69 6-6 6zM9 1C4.589 1 1 4.589 1 9s3.589 8 8 8 8-3.589 8-8-3.589-8-8-8zm.75 7.25h-1.5a.752.752 0 01-.75-.75c0-.413.337-.75.75-.75h2.25a.75.75 0 000-1.5h-.75V5a.75.75 0 00-1.5 0v.25C7.01 5.25 6 6.26 6 7.5s1.01 2.25 2.25 2.25h1.5c.413 0 .75.337.75.75s-.337.75-.75.75H7.5a.75.75 0 000 1.5h.764c-.002.022-.014.044-.014.068V13a.75.75 0 001.5 0v-.182c0-.024-.012-.046-.014-.068h.014c1.24 0 2.25-1.01 2.25-2.25s-1.01-2.25-2.25-2.25z"></path></svg>Avg. price: <b>70</b>-<b>130</b></span>
                                        </div>
                                        </Link>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                    <Link to="/instant-result">
                                    <div className="slider-project">
                                        <img src="/images/c8.webp" alt="project" />
                                        <h5>Wedding and Event Catering</h5>
                                        <span><svg height="18" width="18" fill="currentColor" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg"><path d="M9 15c-3.309 0-6-2.691-6-6s2.691-6 6-6c3.31 0 6 2.691 6 6s-2.69 6-6 6zM9 1C4.589 1 1 4.589 1 9s3.589 8 8 8 8-3.589 8-8-3.589-8-8-8zm.75 7.25h-1.5a.752.752 0 01-.75-.75c0-.413.337-.75.75-.75h2.25a.75.75 0 000-1.5h-.75V5a.75.75 0 00-1.5 0v.25C7.01 5.25 6 6.26 6 7.5s1.01 2.25 2.25 2.25h1.5c.413 0 .75.337.75.75s-.337.75-.75.75H7.5a.75.75 0 000 1.5h.764c-.002.022-.014.044-.014.068V13a.75.75 0 001.5 0v-.182c0-.024-.012-.046-.014-.068h.014c1.24 0 2.25-1.01 2.25-2.25s-1.01-2.25-2.25-2.25z"></path></svg>Avg. price: <b>70</b>-<b>130</b></span>

                                        </div>
                                        </Link>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                    <Link to="/instant-result">
                                    <div className="slider-project">
                                        <img src="/images/c9.webp" alt="project" />
                                        <h5>Wedding Cakes</h5>
                                        <span><svg height="18" width="18" fill="currentColor" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg"><path d="M9 15c-3.309 0-6-2.691-6-6s2.691-6 6-6c3.31 0 6 2.691 6 6s-2.69 6-6 6zM9 1C4.589 1 1 4.589 1 9s3.589 8 8 8 8-3.589 8-8-3.589-8-8-8zm.75 7.25h-1.5a.752.752 0 01-.75-.75c0-.413.337-.75.75-.75h2.25a.75.75 0 000-1.5h-.75V5a.75.75 0 00-1.5 0v.25C7.01 5.25 6 6.26 6 7.5s1.01 2.25 2.25 2.25h1.5c.413 0 .75.337.75.75s-.337.75-.75.75H7.5a.75.75 0 000 1.5h.764c-.002.022-.014.044-.014.068V13a.75.75 0 001.5 0v-.182c0-.024-.012-.046-.014-.068h.014c1.24 0 2.25-1.01 2.25-2.25s-1.01-2.25-2.25-2.25z"></path></svg>Avg. price: <b>70</b>-<b>130</b></span>

                                        </div>
                                        </Link>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                    <Link to="/instant-result">
                                    <div className="slider-project">
                                        <img src="/images/c10.webp" alt="project" />
                                        <h5>TV Repair Services</h5>
                                        <span><svg height="18" width="18" fill="currentColor" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg"><path d="M9 15c-3.309 0-6-2.691-6-6s2.691-6 6-6c3.31 0 6 2.691 6 6s-2.69 6-6 6zM9 1C4.589 1 1 4.589 1 9s3.589 8 8 8 8-3.589 8-8-3.589-8-8-8zm.75 7.25h-1.5a.752.752 0 01-.75-.75c0-.413.337-.75.75-.75h2.25a.75.75 0 000-1.5h-.75V5a.75.75 0 00-1.5 0v.25C7.01 5.25 6 6.26 6 7.5s1.01 2.25 2.25 2.25h1.5c.413 0 .75.337.75.75s-.337.75-.75.75H7.5a.75.75 0 000 1.5h.764c-.002.022-.014.044-.014.068V13a.75.75 0 001.5 0v-.182c0-.024-.012-.046-.014-.068h.014c1.24 0 2.25-1.01 2.25-2.25s-1.01-2.25-2.25-2.25z"></path></svg>Avg. price: <b>70</b>-<b>130</b></span>

                                        </div>
                                        </Link>
                                    </SwiperSlide>
                                   
                              
                                  </Swiper>
                                  <Link to="/" className="btn-cost">See all cost guides</Link>
                    </div>
                </div>
            </div>
        </>
    );
};
export default Cost;
