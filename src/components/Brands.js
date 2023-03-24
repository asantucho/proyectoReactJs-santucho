import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper';
import TheChemistLook from '../images/TCL_Logo-Horizontal-N.jpg';
import Nars from '../images/NARS-LOGO.png';
import Clinique from '../images/Clinique-Logo.png';
import Dior from '../images/dior-logo.png';
import JamesCharles from '../images/james-charles-logo.jpg';
import Kielhs from '../images/Kiehls-Emblem.png';
import Chanel from '../images/00-chanel-logo1.jpg';
import Eucerin from '../images/eucerin-logo.png';
import Kylie from '../images/Kylie-Jenner-Logo-2015.png';

const Brands = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className='mySwiper'
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
      >
        <SwiperSlide className='slide'>
          <img src={TheChemistLook} alt='The Chemist Look' />
        </SwiperSlide>
        <SwiperSlide className='slide'>
          <img src={Kielhs} alt='Kielhs' />
        </SwiperSlide>
        <SwiperSlide className='slide'>
          <img src={Eucerin} alt='Eucerin' />
        </SwiperSlide>
        <SwiperSlide className='slide'>
          <img src={Clinique} alt='Clinique' />
        </SwiperSlide>
        <SwiperSlide className='slide'>
          <img src={Kylie} alt='Kylie' />
        </SwiperSlide>
        <SwiperSlide className='slide'>
          <img src={JamesCharles} alt='James Charles' />
        </SwiperSlide>
        <SwiperSlide className='slide'>
          <img src={Chanel} alt='Chanel' />
        </SwiperSlide>
        <SwiperSlide className='slide'>
          <img src={Dior} alt='Dior' />
        </SwiperSlide>
        <SwiperSlide className='slide'>
          <img src={Nars} alt='Nars' />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Brands;
