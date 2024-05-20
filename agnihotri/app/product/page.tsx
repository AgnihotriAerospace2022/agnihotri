"use client" ;
import React from 'react'
import './style.css'
import Navigate from '../components/navigation/navigation'
import Footer from '../components/footer/footer'
import { useEffect, useState } from "react";
import PageLoader from '../components/loader/pageLoader';

function Product() {
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
        <Navigate></Navigate>
        <center>
            <h1 className='text-4xl bg-gradient-to-t from-gray-700
             from-17% to-white to-62% font-semibold font-sans
             bg-clip-text text-transparent
            '
            >
            Product
            </h1>
        </center>
            <main className='flex flex-col pl-[10vw] pr-[10vw] pt-[3vw] gap-10 mb-20'>
                <div className='text-slate-400 border border-zinc-500 hover:border-zinc-400 p-7 rounded-xl '>
                    Lorem ipsum, dolor sit amet
                     consectetur adipisicing elit. Est illum
                      enim porro sequi provident, voluptatum nam possimus rem placea
                      t quo tempora veniam consequatur pariatur mollitia ducimus harum ipsa
                       dignissimos voluptas?
                </div>
                <section className='flex flex-row gap-10'>
                    <div className='text-slate-400  border border-zinc-500 p-7 rounded-xl'>
                        Lorem ipsum, dolor sit amet
                         consectetur adipisicing elit. Est illum
                          enim porro sequi provident, voluptatum nam possimus rem placea
                          t quo tempora veniam consequatur pariatur mollitia ducimus harum ipsa
                           dignissimos voluptas?
                    </div>
                    <div className='text-slate-400  border border-zinc-500 p-7 rounded-xl '>
                        Lorem ipsum, dolor sit amet
                         consectetur adipisicing elit. Est illum
                          enim porro sequi provident, voluptatum nam possimus rem placea
                          t quo tempora veniam consequatur pariatur mollitia ducimus harum ipsa
                           dignissimos voluptas?
                    </div>
                </section>
        
            </main>
            <div>
           
           
        
           
          </div>
        
                <Footer></Footer>
        
    </div>}
    </>
  )
}

export default Product