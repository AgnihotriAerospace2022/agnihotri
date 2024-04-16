"use client"
import { useState } from "react";
import "./footer.css";

export default function Input() {
  const [joinClick , setJoinClick] = useState(false)  ;
  const [submit, setSubmit]  = useState(true)  ;
  function handleclick()
  {
    if (!joinClick){
        setJoinClick(true)  ;
    }
    else {
      setJoinClick(false)
    }
    
  }

  function handlesubmit(){
    if (submit){
      setSubmit(false)  ;

    }
    else {
      setSubmit(true); 
    }

  }
  return (
    <>
      <div className="">
        <div className="text-sm mx-3 lg:mx-5 lg:text-lg text-slate-50">Dont Miss Any Updates!!</div>
        <button
          className="text-teal-700 border-teal-600 
                border-spacing-2 border-2 
                rounded-md text-xs bg-white
                 hover:bg-teal-700 hover:text-slate-50 p-1
                  active:bg-teal-900 hover:border-teal-700
                lg:text-base mx-5 my-5 animate-popup" onClick={handleclick}
        >
          Join Our Newsletter
        </button>
        {
          joinClick && <div
        className='flex justify-center align-middle -translate-y-[25vh] animate-popup z-50 '
        >
          
          <div className="absolute backdrop-blur-sm bg-white/50
          h-[40vh]   w-[95vw] -translate-x-10 rounded-2xl "
          >
            
            <div className="absolute right-7 text-white text-3xl top-3 cursor-pointer" onClick={handleclick}>X</div>
            {submit &&
              <div>
                <h1 className="text-center text-4xl m-10 mb-12 text-white">Stay Updated With Us</h1>
              <div className="m-10 ml-[35vw] flex flex-col justify-center align-middle">
              <input
                type="email"
                placeholder="         E-mail"
                className=" w-64 block  mb-5 lg:w-80 h-12 rounded-2xl bg-zinc-200"
              />
              <button
              type="submit"
              className="text-teal-400 bg-white w-32
              rounded-xl ml-20 lg:w-44 lg:h-12 font-extrabold
               border-emerald-800 border-2 ease-in-out duration-200 hover:bg-emerald-800 hover:text-white
               cursor-none" onClick={handlesubmit}
                        >
              submit
                        </button>
            </div>
          </div>}
          {
            !submit && 
            <div className="m-36 flex justify-center text-black text-3xl">
              <div>
                submited succesfully !!
              </div>
            </div>
          }
        </div>
        </div>
        }
      </div>
    </>
  );
}
