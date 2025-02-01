import React from "react";
import './service.css';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Using Swiper with modules
const Service = () => {
  return (
    <>
    <div className="service">
        <div className="custom-container">
            <div className="row">
                <h3>Services you might also like1</h3>

                 <Swiper
                              
                                spaceBetween={15}
                                slidesPerView={3}
                                onSlideChange={() => console.log('slide change')}
                                onSwiper={(swiper) => console.log(swiper)}
                                breakpoints={{
                                    // when window width is >= 320px
                                    320: {
                                      slidesPerView: 2,
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
                                    <div className="slider-project">
                                    <img src="/images/s1.webp" alt="project" />
                                    <h5>Handyman</h5>
                                    </div>
                                    </SwiperSlide>
                                <SwiperSlide> <div className="slider-project">
                                    <img src="/images/s2.webp" alt="project" />
                                    <h5>General contractors</h5>
                                    </div>
                                    </SwiperSlide>
                                <SwiperSlide> <div className="slider-project">
                                    <img src="/images/s3.webp" alt="project" />
                                    <h5>Roof estimating services</h5>
                                    </div>
                                    </SwiperSlide>
                                <SwiperSlide>
                                <div className="slider-project">
                                    <img src="/images/s4.webp" alt="project" />
                                    <h5>Local electricians</h5>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                <div className="slider-project">
                                    <img src="/images/s5.webp" alt="project" />
                                    <h5>Personal trainers</h5>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                <div className="slider-project">
                                    <img src="/images/s6.webp" alt="project" />
                                    <h5>Freelance web designers</h5>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                <div className="slider-project">
                                    <img src="/images/s7.webp" alt="project" />
                                    <h5>Shower contractors</h5>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                <div className="slider-project">
                                    <img src="/images/s8.webp" alt="project" />
                                    <h5>Plumbers</h5>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                <div className="slider-project">
                                    <img src="/images/s9.webp" alt="project" />
                                    <h5>Resume writers and editors</h5>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                <div className="slider-project">
                                    <img src="/images/s10.webp" alt="project" />
                                    <h5>Financial planners</h5>
                                    </div>
                                </SwiperSlide><SwiperSlide>
                                <div className="slider-project">
                                    <img src="/images/s11.webp" alt="project" />
                                    <h5>Ethernet wiring</h5>
                                    </div>
                                </SwiperSlide>
                               
                
                              </Swiper>
            </div>
        </div>
        </div>        
    
    </>
  );
};
export default Service;