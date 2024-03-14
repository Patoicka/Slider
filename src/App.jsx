import React, { useState } from 'react'

import { data } from './assets/data'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'
import { Slider } from './slider';

export const App = () => {

 /*  const renderImage = () => {
    return data.map((image) => {
      console.log(image);
      return (
        <Swiper
          slidesPerView={1}
        >
          <SwiperSlide>
        
              <img src={image.url} alt="" />
          </SwiperSlide>
        </Swiper>
      )
    })
  }; */

  const imagesSlides = [
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
  ]

  // const slides = data.map(item => ({ name: item.url }));

  /*  const [currentIndex, setCurrentIndex] = useState(0)
   



  /* const slides = [
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

  /*  const prevImage = () => {
     const isFirstImage = currentIndex === 0;
     const newIndex = isFirstImage ? slides.length - 1 : currentIndex - 1
     setCurrentIndex(newIndex)
   }
   
   const nexrImage = () => {
     const isLastImage = currentIndex === slides.length - 1;
     const newIndex = isLastImage ? 0 : currentIndex + 1
     setCurrentIndex(newIndex)
   } */

  /* return (
    <div className='w-screen h-screen bg-black'>
      <div className='w-screen m-auto xs:h-[200px] sm:h-[220px] md:h-[300px] lg:h-[500px] xl:h-[700px] xs:px-2 py-4 px-10 relative group bg-gray-500'>
        <div style={{ backgroundImage: `url(${slides[currentIndex].name})` }} className='w-full h-full rounded-2xl bg-cover bg-center duration-500 border' >
        </div>
   
        
        <div onClick={prevImage} className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 mx-1 bg-black/20 text-white cursor-pointer'>
          <FontAwesomeIcon icon={faChevronLeft} />
        </div>
       
        <div onClick={nexrImage} className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 mx-1 bg-black/20 text-white cursor-pointer'>
          <FontAwesomeIcon icon={faChevronRight} />
        </div>
      </div>
    </div>
  ) */
  return (
    <div>
      <Slider/>
    </div>

  )
}
