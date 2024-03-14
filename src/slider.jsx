import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css'

export const Slider = () => {

    return (
        <Swiper
            slidesPerView={1}
            onTimeUpdate={3000}
        >
            <SwiperSlide>
                <div className=" w-screen h-96 xs:h-40 sm:h-40 md:h-48 lg:h-64 xl:h-80 bg-[url('/src/assets/images/angular.jpg')] bg-cover bg-center"></div>
            </SwiperSlide>
            <SwiperSlide>
                <div className=" w-screen h-96 xs:h-40 sm:h-40 md:h-48 lg:h-64 xl:h-80 bg-[url('/src/assets/images/jquery.jpg')] bg-cover bg-center"></div>
            </SwiperSlide>
            <SwiperSlide>
                <div className=" w-screen h-96 xs:h-40 sm:h-40 md:h-48 lg:h-64 xl:h-80 bg-[url('/src/assets/images/nodejs.jpg')] bg-cover bg-center"></div>
            </SwiperSlide>
            <SwiperSlide>
                <div className=" w-screen h-96 xs:h-40 sm:h-40 md:h-48 lg:h-64 xl:h-80 bg-[url('/src/assets/images/php.jpg')] bg-cover bg-center"></div>
            </SwiperSlide>
            <SwiperSlide>
                <div className=" w-screen h-96 xs:h-40 sm:h-40 md:h-48 lg:h-64 xl:h-80 bg-[url('/src/assets/images/react.jpg')] bg-cover bg-center"></div>
            </SwiperSlide>
        </Swiper>
    );
}
