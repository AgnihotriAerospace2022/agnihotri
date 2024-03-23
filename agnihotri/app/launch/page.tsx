import React from "react";
import "./launch.css";
import Head from "next/head";
import Script from "next/script";
import Link from "next/link";

import image1 from "../images/image1.jpg";
import Navigate from "../components/navigation/navigation";
import Footer from "../components/footer/footer";
function Launch() {
  return (
    <>
      <div className="">
        <Navigate></Navigate>
     <Head>
     <script type="module" 
     src="https://ajax.googleapis.com/ajax/libs/model-viewer/3.4.0/model-viewer.min.js">
     </script>
     </Head>
        <Link href='/Model'>
          <center>
            <h1>Launch</h1>
          </center>
        </Link>
        <section className="flex flex-col gap-20 justify-center align-middle  container-style">
          <div className="flex lg:flex-row flex-col gap-10 m-10 rocketContent">
          <img
              src={"/images/image1.jpg"}
              alt="rocketImage"
              className=" rounded-[10px] h-[330px]  lg:hidden "
            />
            {/* <model-viewer src="public/model/wwww.gltf" ></model-viewer> */}
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of type
              and scrambled it to make a type specimen book. It has survived not
              only five centuries, but also the leap into electronic typesetting,
              remaining essentially unchanged. It was popularised in the 1960s
              with the release of Letraset sheets containing Lorem Ipsum passages,
              and more recently with desktop publishing software like Aldus
              PageMaker including versions of Lorem Ipsum.
              <br></br>
              <br></br>
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not only
              five centuries, but also the leap into electronic typesetting,
              remaining essentially unchanged. It was popularised in the 1960s
              with the release of Letraset sheets containing Lorem Ipsum passages,
              and more recently with desktop publishing software like Aldus
              PageMaker including versions of Lorem Ipsum.
            </p>
            <img
              src={"/images/image1.jpg"}
              alt="rocketImage"
              className="lg:w-[550px] lg:rounded-[10px] hidden lg:inline-block"
            />
          </div>
          <div
            className="flex lg:flex-row flex-col align-middle gap-20 m-10"
            id="componentCard"
          >
            <div className="card">
              <img
                src={"/images/image2.jpg"}
                alt="component1"
                className="lg:w-[350px] lg:rounded-[30px] lg:p-[20px] rounded-[20px] w-[250px] m-10 mb-2
                lg:m-0"
              />
              <p className="lg:p-5  p-6">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy text
                ever since the 1500sLorem Ipsum has been the industry's standard
                dummy text ever since the 1500s
              </p>
            </div>
            <div className="card">
              <img
                src={"/images/image1.jpg"}
                alt="component2"
                className="lg:w-[350px] lg:rounded-[30px] lg:p-5 rounded-[20px] w-[250px]
                lg:m-0  m-12 mb-2"
              />
              <p className="lg:p-5 p-6 ">
                {" "}
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy text
                ever since the 1500sLorem Ipsum has been the industry's standard
                dummy text ever since the 1500s
              </p>
            </div>
            <div className="card">
              <img
                src={"/images/image1.jpg"}
                alt="component3"
                className="lg:w-[350px] lg:rounded-[30px] lg:p-5 rounded-[20px] w-[250px]
                lg:m-0 m-12 mb-2"
              />
              <p className=" lg:p-5 p-6">
                {" "}
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy text
                ever since the 1500sLorem Ipsum has been the industry's standard
                dummy text ever since the 1500s
              </p>
            </div>
          </div>
        </section>
        <Footer></Footer>
      </div>
      <div id="rocketContainer" className="h-96 w-96 hidden">

      </div>
      <script src="agnihotri/app/launch/model.js"></script>
    </>
  );
}

export default Launch;
