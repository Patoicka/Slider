import React from 'react'

import { data } from './assets/data'
import { Swiper, SwiperSlide } from 'swiper/react';
import Angular from './assets/images/angular.jpg'
import jQuery from './assets/images/jquery.jpg'
import NodeJs from './assets/images/nodejs.jpg'
import Php from './assets/images/php.jpg'
import ReactImg from './assets/images/react.jpg'

import 'swiper/css'

export const Slider = () => {

    /*  const slides = [
         {
             name: data[0].url
         },
         {
             name: data[1].url
         },
         {
             name: data[2].url
         },
         {
             name: data[3].url
         },
         {
             name: data[4].url
         }
     ]; */

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
