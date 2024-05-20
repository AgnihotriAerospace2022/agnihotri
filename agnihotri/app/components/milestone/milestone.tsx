"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";

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
      <center>
        <div className="app">
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
              <div className=" flex flex-row w-[100%] h-[100%]">
                <div className="h-[100%] w-[500vw]"><img src={"/images/image1.jpg"} alt="" /></div>
                <div className="bg-black lg:text-base text-sm p-24 pt-40 text-white 
                 ">
                
                  The engine, precisely designed with both convergent and
                  divergent nozzles, has undergone intensive testing to ensure
                  its performance. It has been rigorously tested and proven to
                  be capable of producing maximum thrust. This painstakingly
                  built engine not only demonstrates engineering accuracy, but
                  also promises exceptional functionality. Capable of attaining
                  lift-off, it can fly to an astonishing apogee of 100 meters,
                  representing the pinnacle of inventive design and technical
                  innovation. Its successful testing represents a significant
                  step forward in the development of efficient propulsion
                  technologies for future aeronautical ventures.
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="content">
                <img src={"/images/image2.jpg"} alt="" />
                <div className="content-inside lg:text-base text-sm p-2">
                  With fantastic joy, we announce the of completion of the
                  satellite payload, which became executed thru painstaking
                  meeting and integration of modern additives. This milestone
                  now not simplest marks a big accomplishment in area journey,
                  but it also ushers in a new age of scientific discovery. This
                  payload is ready to begin on its undertaking, which degrees
                  from permitting Earth commentary to reworking
                  telecommunications, due to the devotion and competence of the
                  proficient team that assembled it. As it prepares to go into
                  the cosmos, it brings with it the hopes and desires of
                  breaking new floor in our understanding of the arena.
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="content">
                <img src={"/images/image3.jpg"} alt="" />
                <div className="content-inside lg:text-base text-sm p-2">
                  It brings us great pleasure to declare that we broke the speed
                  record on our most recent test flight, reaching 600 miles per
                  hour! This flight demonstrated the exceptional performance and
                  stability of our aircraft, even at such high speeds, and was
                  conducted in ideal weather circumstances. This accomplishment
                  is more than simply a triumph for us; it represents a leap
                  ahead in aviation technology, stretching the frontiers of what
                  was previously thought conceivable. We&apos;re delighted about the
                  possibilities that this achievement opens up, and we&apos;re ready
                  to keep pushing the envelope of aviation innovation.
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </center>
    </>
  );
}
