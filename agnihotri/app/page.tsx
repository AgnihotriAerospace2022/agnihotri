"use client";
import "./app.css";
import Navigate from "./components/navigation/navigation";
import Footer from "./components/footer/footer";
import Milestone from "./components/milestone/milestone";
import { ReactTyped } from "react-typed";

export default function Home() {
  return (
    <>
      <>
        <div className="navigate ">
          <Navigate />
        </div>
        <div className="content relative">
          <img
            src={"/images/bg.png"}
            alt="background-image"
            className="h-6/6"
          />
          <div className=" absolute top-16 lg:top-48 right-10 text-2xl md:text-5xl lg:text-8xl ">
            <p className="text-white text-right opacity-100 animate-onScrollFade">Expanding</p>
            <p className="text-white text-right opacity-95">
              <span className="opacity-30 ">the</span> horizon{" "}
              <span className="opacity-30 ">of</span> space{" "}
            </p>
           
            <p className="text-right opacity-75 
             bg-gradient-to-r from-sky-400 from-30% via-purple-400 to-red-300 bg-clip-text text-transparent">
              <ReactTyped
                strings={["exploration","expansion"]}
                typeSpeed={140}
                backSpeed={150}
                loop
              />
            </p>
          </div>
        </div>
        <div className="mt-1/4 mb-1/5 -ml-7">
          <Milestone></Milestone>
        </div>
        <div className="footer ">
          <Footer />
        </div>
      </>
    </>
  );
}
