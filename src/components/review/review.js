import React from "react";
import './review.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination} from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Using Swiper with modules
const Review = () => {
  return (
    <>
    <div className="review">
        <div className="custom-container">
            <div className="row testimonial" >
                <h2>These reviews say it better.</h2>
                 <Swiper
                              
                                spaceBetween={15}
                                slidesPerView={1}
                                onSlideChange={() => console.log('slide change')}
                                onSwiper={(swiper) => console.log(swiper)}
                                modules={[Pagination]}
                                pagination
                                breakpoints={{
                                  // when window width is >= 320px
                                  320: {
                                    slidesPerView: 1,
                                    spaceBetween: 10,
                                  },
                                  // when window width is >= 640px
                                  640: {
                                    slidesPerView: 1,
                                    spaceBetween: 15,
                                  },
                                  // when window width is >= 1024px
                                  1024: {
                                    slidesPerView: 1,
                                    spaceBetween: 15,
                                  },
                                }}
                              >
                                <SwiperSlide>
                                    <div className="slider-review">
                                   
                                    <h5>"Syncero is a place that I would recommend real people to go. If you need to have your sink done, replaced, go to Syncero."</h5>
                                    <span>-Lawrence</span>
                                    </div>
                                    </SwiperSlide>
                                <SwiperSlide> <div className="slider-review">
                                <h5>"We found so many people on Syncero. And some of the people we found on Syncero, like our electrician, we use him now. He's great."</h5>
                                <span>-Pamela</span>
                                    </div>
                                    </SwiperSlide>
                                <SwiperSlide> <div className="slider-review">
                                <h5>"I didn't realize how many professionals Syncero had on it. You type in things like ‘house cleaning,’ you get a ton of pros. You type in ‘landscaping,’ you get a ton of pros. You name it. It's there."</h5>
                                <span>-Terrence</span>
                                    </div>
                                    </SwiperSlide>
                                    </Swiper>
            </div>
        </div>
        </div>
    </>
  );
};
export default Review;