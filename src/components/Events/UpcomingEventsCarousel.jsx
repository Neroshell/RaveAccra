import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import event_img from '../../assets/event_img.jpeg';

const UpcomingEventsCarousel = () => {
  return (
    <div className='carousel-container'>
      <Swiper
        loop={true}
        spaceBetween={15} 
        autoplay={{
            delay: 2000,
            disableOnInteraction: false
          }}
        pagination={true}

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
          <img className='carousel-image' src={event_img} alt="Event" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='carousel-image' src={event_img} alt="Event" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='carousel-image' src={event_img} alt="Event" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='carousel-image' src={event_img} alt="Event" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='carousel-image' src={event_img} alt="Event" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='carousel-image' src={event_img} alt="Event" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default UpcomingEventsCarousel;
