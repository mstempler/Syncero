import React from "react";
import './project.css';
// import Swiper core and required modules
import { Navigation} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation'; // Ensure navigation style is included
import 'swiper/css/pagination';  // Ensure pagination style is included

const Project = ({ heading, subheading, slides }) => {
  return (
    <div className="project">
      <div className="custom-container">
        <div className="row">
          <div className="col-md-12 slider-pr">
            {heading && <h4>{heading}</h4>}
            {subheading && <p className="text-project">{subheading}</p>}

            <Swiper
              spaceBetween={15}
              slidesPerView={3}
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
              {slides.map((slide, index) => (
                <SwiperSlide key={index}>
                  <Link to={slide.link}>
                    <div className="slider-project">
                      <img src={slide.image} alt={slide.title} />
                      <h5>{slide.title}</h5>
                    </div>
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
