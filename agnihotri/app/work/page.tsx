import React from "react";
import "../product/style.css";
import Navigate from "../components/navigation/navigation";
import Footer from "../components/footer/footer";

function Work() {
  return (
    <>
      <Navigate></Navigate>
      <h1
        className="text-4xl bg-gradient-to-t from-gray-700 lg:ml-[41%] ml-[23%]
     from-17% to-white to-62% font-semibold font-sans 
     bg-clip-text text-transparent "
      >
        Work With Us
      </h1>

      <section className="flex flex-row gap-5 lg:gap-16 lg:pl-[13vw]  lg:pr-[10vw] lg:pt-[5vw] p-5 mb-20 animate-onScrollFade">
        <div className="border p-5 border-gray-500 hover:border-gray-400 rounded-3xl hover:scale-105 duration-300 hover:backdrop-blur-sm
         hover:bg-white/20 cursor-pointer ">
          <center>
              <h1 className="text-zinc-200  m-2 mb-10">Job</h1>
          </center>
          <img src={"/images/image1.jpg"} alt="" className=" inline-block rounded-3xl  mb-4 -mt-6 " />
          <p className="text-zinc-400 lg:text-base text-xs">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
            sint, exercitationem ducimus, commodi nisi alias sapiente
            consequatur et nulla saepe soluta optio nostrum! Qui porro
            architecto veniam, tenetur eius est.
          </p>
        </div>
        <div className="border p-5 border-gray-500 rounded-3xl hover:border-gray-400 hover:scale-105 duration-300 
        hover:backdrop-blur-sm hover:bg-white/20 cursor-pointer" >
          <center>
              <h1 className="text-zinc-200 m-2 mb-10">Internship</h1>
          </center>
          <img src={"/images/image1.jpg"} alt="" className=" inline-block rounded-3xl  mb-4 -mt-6 " />
          <p className="text-zinc-400 lg:text-base text-xs">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem
            debitis numquam totam perspiciatis, officia necessitatibus rem?
            Minima porro laudantium enim libero ut, nisi eligendi ducimus natus
            quibusdam aperiam corporis quae?
          </p>
        </div>
      </section>
      <Footer></Footer>
    </>
  );
}

export default Work;
