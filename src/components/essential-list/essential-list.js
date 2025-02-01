import React from "react";
import './essential-list.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation} from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Link } from "react-router-dom";

const Essentiallist = ({ heading, subh, cards }) => {
  return (
    <div className="essential-list">
      <div className="custom-container">
        <div className="row slider-pr">
          <h5>{heading}</h5>
          {
             subh &&<p className="subh">{subh}</p>
          }
         
          <Swiper
            spaceBetween={15}
            slidesPerView={4}
            modules={[Navigation]}
            navigation
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
                slidesPerView: 4,
                spaceBetween: 15,
              },
            }}
          >

            {cards.map((card, index) => (
              <SwiperSlide key={index}>
                <Link to={"/"}>
                <div className="slider-section">
                  <div className="image-card">
                    <img src={card.image} alt={card.title} />
                    <div className="text-overlay">
                      <h3>{card.title}</h3>
                      <p>{card.description}</p>
                    </div>
                  </div>
                </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Essentiallist;
