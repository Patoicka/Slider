import React from 'react'

import Angular from '../src/assets/images/angular.jpg'
import jQuery from '../src/assets/images/jquery.jpg'
import NodeJs from '../src/assets/images/nodejs.jpg'
import Php from '../src/assets/images/php.jpg'
import ReactImg from '../src/assets/images/react.jpg'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';



export const App = () => {

  return (
    <div className='border border-1'>
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={'auto'}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
          }}
        >
          <SwiperSlide>
            <img src={Angular} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={jQuery} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={NodeJs} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Php} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={ReactImg} />
          </SwiperSlide>
        </Swiper>
      {/*  <div className="slider-controler">
        <div className="swiper-button-prev slider-arrow">

        </div>
        <div className="swiper-button-next slider-arrow">

        </div>
        <div className="swiper-pagination"></div>
      </div> */}
    </div >

  )
}
