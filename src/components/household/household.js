import React from "react";
import "./household.css";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Link } from "react-router-dom";

const Household = ({ data }) => {
  return (
    <div className="household">
      <div className="custom-container">
        <h5>{data.title}</h5>
        <p>{data.description}</p>
        <Swiper
          spaceBetween={15}
          slidesPerView={3}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 15,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 15,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 15,
            },
          }}
        >
          {data.services.map((service, index) => (
            <SwiperSlide key={index}>
              <Link to={"/"}>
              <div className="house-box">
                <div className="image-container">
                  <img src={service.image} alt={service.overlayText} />
                  <div className="overlay-text">{service.overlayText}</div>
                </div>
                <h5>{service.name}</h5>
                <span>
                  <svg
                    height="18"
                    width="18"
                    fill="currentColor"
                    viewBox="0 0 18 18"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9 15c-3.309 0-6-2.691-6-6s2.691-6 6-6c3.31 0 6 2.691 6 6s-2.69 6-6 6zM9 1C4.589 1 1 4.589 1 9s3.589 8 8 8 8-3.589 8-8-3.589-8-8-8zm.75 7.25h-1.5a.752.752 0 01-.75-.75c0-.413.337-.75.75-.75h2.25a.75.75 0 000-1.5h-.75V5a.75.75 0 00-1.5 0v.25C7.01 5.25 6 6.26 6 7.5s1.01 2.25 2.25 2.25h1.5c.413 0 .75.337.75.75s-.337.75-.75.75H7.5a.75.75 0 000 1.5h.764c-.002.022-.014.044-.014.068V13a.75.75 0 001.5 0v-.182c0-.024-.012-.046-.014-.068h.014c1.24 0 2.25-1.01 2.25-2.25s-1.01-2.25-2.25-2.25z"></path>
                  </svg>
                  Avg. Price {service.avgPrice}
                </span>
              </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Household;
