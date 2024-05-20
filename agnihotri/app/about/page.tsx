"use client";

import "./about.css";
import Image from "next/image";
import { useState, useEffect } from "react";

import Navigate from "../components/navigation/navigation";
import Footer from "../components/footer/footer";
import PageLoader from "../components/loader/pageLoader";
const About = () => {
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
      {isLoading ? (
        <PageLoader />
      ) : (
        <div>
          <div className="navigate">
            <Navigate></Navigate>
          </div>
          <h1 className="about lg:ml-[43%]">About Us</h1>
          <div
            className="NameContainer
      lg:w-[100%] lg:h-[100%] lg:mt-[100px]
      flex gap-12 flex-col justify-center "
          >
            <div
              className="NameContent
        lg:mr-[150px]
        ml-10 mr-10
         lg:ml-[150px] lg:flex 
        flex-row gap-8   text-zinc-400 scale-50 opacity-30 animate-onScrollFade "
            >
              <img
                src={"/images/logo_white.png"}
                alt=""
                className="lg:hidden  
      rounded-3xl h-56   "
              />
              <div className="flex-col">
                <p className="inline-block p-3 mt-2 text-lg text-white">
                  At our space technology startup, we are driven by a persistent
                  dedication to addressing the industry&apos;s most pressing issues.
                </p>
                <p className=" p-8 pb-12 text-zinc-400  -mt-10 ">
                  <ul className="duration-300">
                    <li className="p-3 text-base duration-300 animate-onScrollFade">
                      <span className="text-lg text-white">
                        → High cost per launch:
                      </span>{" "}
                      Our main goal is to significantly lower the outrageous
                      expenses related to space launches.
                    </li>
                    <li className="p-3 text-base duration-300 animate-onScrollFade">
                      <span
                        className="text-lg text-white
                    "
                      >
                        → Long wait times between launches:
                      </span>{" "}
                      We&apos;re committed to reducing the long wait times between
                      launches so that our customers can get space more quickly.
                    </li>
                  </ul>
                  <p className="-ml-5 mt-2 text-base">
                    By innovating and optimizing our processes, we aim to make
                    space more accessible and affordable while providing faster
                    access to orbit for our customers.
                  </p>
                </p>
              </div>
              <img
                src={"/images/logo_white.png"}
                alt=""
                className="w-80 lg:inline-block rounded-3xl  h-52 hidden"
              />
            </div>
            <div
              className="NameContent  scale-50 opacity-30 animate-onScrollFade
        lg:mr-[150px]
        ml-10 mr-10
         lg:ml-[150px] lg:flex
        flex-row gap-8  pb-5 text-zinc-400"
            >
              <img
                src={
                  "https://drive.google.com/thumbnail?id=13uUtoqKD6Uzp5-eJQj5SN7R5FnI7Rgbn&sz=w1000"
                }
                alt=""
                className="w-[65vw] lg:inline-block rounded-3xl h-[40vh] hidden"
              />
              <img
                src={
                  "https://drive.google.com/thumbnail?id=13uUtoqKD6Uzp5-eJQj5SN7R5FnI7Rgbn&sz=w1000"
                }
                alt=""
                className="lg:hidden w-[30vw] rounded-3xl h-52 "
              />
              <p className="inline-block text-base p-12 border-b-2  pb-0 mt-2 pt-14 text-zinc-400">
                Our passion is locating solutions to difficult space exploration
                issues. <span className="text-white">Our attention?</span> Solving difficult problems in space
                exploration is our passion.<span className="text-white"> Our priority?</span> manufacturing reusable
                rockets that land gently where we want them to. Lower expenses
                and shorter launch delays result from this. Our goal is to
                increase accessibility for all people in space. That being said,
                we are here to fulfill your curiosity about what is beyond of
                our atmosphere. Together, let&apos;s go on this trip.
              </p>
            </div>
            <div
              className="NameContent scale-50 opacity-30 animate-onScrollFade
        lg:mr-[150px]
         lg:ml-[150px] lg:flex
         ml-10 mr-10
        flex-row gap-8  pb-5 text-zinc-400 mb-10"
            >
              <img
                src={"https://drive.google.com/thumbnail?id=1_6VaI06itOMtm_fG-N6jB9a9CGLViG50&sz=w1000"}
                alt=""
                className="lg:hidden w-80  rounded-3xl h-52"
              />
              <p className="inline-block text-base border-b-2 p-3 pr-10 pt-0 pb-12 mt-2 text-zinc-400 ">
                <p className="text-white text-lg p-5 pb-1 pl-0">How are we achieving this?
</p>
                In our effort to reimagine space exploration, we&apos;re focused on
                two critical systems: <span className="text-white block p-5 pb-0 pl-0 text-lg">the Reaction Control System (RCS)</span> 
                <span className="text-white block p-2 pb-5 pl-0 text-lg">Electrically Powered Propulsion Turbine System (EPPTS)</span>Our
                rockets are guided by the RCS, which allows for accurate
                navigation from space to the intended position on Earth. It
                guarantees precise landings and enables seamless atmospheric
                re-entry, both of which are essential for improving reusability
                and economy. Conversely, the EPPTS transforms conventional
                rocket propulsion techniques. The intricate pre-burner cycle is
                swapped out for a finely tuned electric pump, which maximizes
                fuel injection and allows for accurate thrust control during
                landing maneuvers. This novel method contributes to safer and
                more affordable space travel in addition to improving the
                effectiveness and dependability of rocket propulsion. When
                combined, these solutions show tremendous progress toward our
                objective of increasing accessibility and sustainability for
                space exploration. With each innovation, we get closer to a
                future in which the glories of space are accessible to everyone.
              </p>
              <img
                src={"https://drive.google.com/thumbnail?id=13FFz_vMQ8Nb7kBVmDqpasEBrfwfypSWu&sz=w1000"}
                alt=""
                className="w-[80vw] h-[46vh] lg:inline-block rounded-3xl hidden "
              />
            </div>
          </div>
          <div className="footer">
            <Footer></Footer>
          </div>
        </div>
      )}
    </>
  );
};

export default About;
