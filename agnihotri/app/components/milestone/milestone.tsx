'use client'

import React, { useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./milestone.css";

import image1 from "/Users/sanjanathyady/Documents/Files/ag/agnihotri/app/assets/images/image1.jpg";
import image2 from "/Users/sanjanathyady/Documents/Files/ag/agnihotri/app/assets/images/image3.jpg";
import image3 from "/Users/sanjanathyady/Documents/Files/ag/agnihotri/app/assets/images/image2.jpg";

import { Pagination, Navigation } from "swiper/modules";

export default function Milestone() {
  return (
    <>
   
  
      <center><div id="app">
        <Swiper
          slidesPerView={1}
          spaceBetween={0}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="content">
              <img src={"/images/image1.jpg"} alt="" />
              <div className="content-inside">
                These are just a few ways that one might use the random sentence
                generator for their benefit. If you're not sure if it will help
                in the way you want, the best course of action is to try it and
                see. Have several random sentences generated and you'll soon be
                able to see if they can help with your project.
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="content">
              <img src={"/images/image2.jpg"} alt="" />
              <div className="content-inside">
                These are just a few ways that one might use the random sentence
                generator for their benefit. If you're not sure if it will help
                in the way you want, the best course of action is to try it and
                see. Have several random sentences generated and you'll soon be
                able to see if they can help with your project.
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="content">
              <img src={"/images/image3.jpg"} alt="" />
              <div className="content-inside">
                These are just a few ways that one might use the random sentence
                generator for their benefit. If you're not sure if it will help
                in the way you want, the best course of action is to try it and
                see. Have several random sentences generated and you'll soon be
                able to see if they can help with your project.
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="content">
              <img src={"/images/image1.jpg"} alt="" />
              <div className="content-inside">
                These are just a few ways that one might use the random sentence
                generator for their benefit. If you're not sure if it will help
                in the way you want, the best course of action is to try it and
                see. Have several random sentences generated and you'll soon be
                able to see if they can help with your project.
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="content">
              <img src={"/images/image2.jpg"} alt="" />
              <div className="content-inside">
                These are just a few ways that one might use the random sentence
                generator for their benefit. If you're not sure if it will help
                in the way you want, the best course of action is to try it and
                see. Have several random sentences generated and you'll soon be
                able to see if they can help with your project.
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="content">
              <img src={"/images/image3.jpg"} alt="" />
              <div className="content-inside">
                These are just a few ways that one might use the random sentence
                generator for their benefit. If you're not sure if it will help
                in the way you want, the best course of action is to try it and
                see. Have several random sentences generated and you'll soon be
                able to see if they can help with your project.
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="content">
              <img src={"/images/image3.jpg"} alt="" />
              <div className="content-inside">
                These are just a few ways that one might use the random sentence
                generator for their benefit. If you're not sure if it will help
                in the way you want, the best course of action is to try it and
                see. Have several random sentences generated and you'll soon be
                able to see if they can help with your project.
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="content">
              <img src={"/images/image1.jpg"} alt="" />
              <div className="content-inside">
                These are just a few ways that one might use the random sentence
                generator for their benefit. If you're not sure if it will help
                in the way you want, the best course of action is to try it and
                see. Have several random sentences generated and you'll soon be
                able to see if they can help with your project.
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="content">
              <img src={"/images/image2.jpg"} alt="" />
              <div className="content-inside">
                These are just a few ways that one might use the random sentence
                generator for their benefit. If you're not sure if it will help
                in the way you want, the best course of action is to try it and
                see. Have several random sentences generated and you'll soon be
                able to see if they can help with your project.
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div></center>
    </>
  );
}
