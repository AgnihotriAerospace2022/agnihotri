'use client'
import React, { useEffect, useRef, useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import Image from "next/image";


import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import "swiper/css/navigation";


import './gallery.css';



import { EffectCoverflow, Navigation, Pagination } from 'swiper/modules';
import Navigate from '../components/navigation/navigation';
import Footer from '../components/footer/footer';
import PageLoader from '../components/loader/pageLoader';

export default function Gallery() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulating an asynchronous action
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <>
   {isLoading ? <PageLoader /> :
    <div>
      <div className="navigate">
        <Navigate></Navigate>
      </div>
      <center><h1>
          Gallery
      </h1></center>
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={'auto'}
          coverflowEffect={{
            rotate: 15,
            stretch: 0,
            depth: 400,
            modifier: 1,
            slideShadows: true,
          }}
          loop={true}
      
          navigation={true}
          modules={[EffectCoverflow, Pagination ,Navigation]}
          className="mySwiper"
        > 
         {/* https://drive.google.com/thumbnail?id={Enter Your ID}&sz=w1000 */}

          <SwiperSlide>
            <img src="https://drive.google.com/thumbnail?id=13uUtoqKD6Uzp5-eJQj5SN7R5FnI7Rgbn&sz=w1000" 
            alt=''/>
          </SwiperSlide>
          <SwiperSlide>
            <img src=" https://drive.google.com/thumbnail?id=1O9qcxCwsSUIhBD27_YvMtObHr1bMaCo_&sz=w1000" alt=''/>
          </SwiperSlide>
          <SwiperSlide> 
            <img src="https://drive.google.com/thumbnail?id=1_6VaI06itOMtm_fG-N6jB9a9CGLViG50&sz=w1000"alt='' />
          </SwiperSlide>
          <SwiperSlide> 
            <img src="https://drive.google.com/thumbnail?id=13FFz_vMQ8Nb7kBVmDqpasEBrfwfypSWu&sz=w1000"alt='' />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://drive.google.com/thumbnail?id=1aprFVHKTXVYCHPQGdJ6gxI6MJWMUZ_ru&sz=w1000" alt='' />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://drive.google.com/thumbnail?id=1cD8nDDSJzh0sUzcuAI0AYFfu0B2s5P-Z&sz=w1000" alt=''/>
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://drive.google.com/thumbnail?id=1ASxvhJTG40bT97tVxJmRYu8ue9pJgdjz&sz=w1000" alt=''/>
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://drive.google.com/thumbnail?id=1-fZFOwJgZJRRy8XfxbY2JoRKNVfbYHFG&sz=w1000" alt='' />
          </SwiperSlide>
           <SwiperSlide>
            <img src="https://drive.google.com/thumbnail?id=1dDzkiBXr4hD1B7rnu8fG0lBA85nRXg77&sz=w1000" alt='' />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://drive.google.com/thumbnail?id=1OpWzjj6Eu7RcbdPSY6fm2gCNjXNZxiby&sz=w1000" alt='' />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://drive.google.com/thumbnail?id=1kzNpsULS2M9P_llnvvB9EE8dtjVKHl_c&sz=w1000" alt='' />
          </SwiperSlide>
         </Swiper>
         <div className="footer">
          <Footer></Footer>
         </div>
    </div>}
    </>
  );
}
