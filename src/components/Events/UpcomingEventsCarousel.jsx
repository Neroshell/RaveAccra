

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import event_img from '../../assets/event_img.jpeg';
import 'swiper/css';





const UpcomingEventsCarousel = () => {
  return (
    <div className='carousel-container'>
      <Swiper
       
        loop={true}
        spaceBetween={15} 
        navigation={{ clickable: true }}
        pagination={{ clickable: true }}
        slidesPerView={1}
       
        breakpoints={{
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 4,
          },
        }}
       
      >
        <SwiperSlide className='slide'>
          <img className='carousel-image' src={event_img} />
        </SwiperSlide>
        <SwiperSlide>
          <img className='carousel-image' src={event_img} />
        </SwiperSlide>
        <SwiperSlide>
          <img className='carousel-image' src={event_img} />
        </SwiperSlide>
        <SwiperSlide>
          <img className='carousel-image' src={event_img} />
        </SwiperSlide>
        <SwiperSlide>
          <img className='carousel-image' src={event_img} />
        </SwiperSlide>
        <SwiperSlide>
          <img className='carousel-image' src={event_img} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default UpcomingEventsCarousel;
