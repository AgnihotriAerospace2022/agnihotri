import Footer from "../components/footer/footer";
import Navigate from "../components/navigation/navigation";
import "./contact.css";

function Contact() {
  return (
    <>
      <Navigate></Navigate>
      <center>
        <h1
          className=" bg-clip-text text-transparent bg-gradient-to-t
         from-zinc-900 from-15% via-slate-500 
         to-white to-70% text-6xl transition ease-in-out duration-200 
        lg:text-7xl
         "
        >
          Contact Us
        </h1>
      </center>
      <div className="mt-24 flex lg:flex-row flex-col  mb-32 ml-20">
        <div id="input" className=" flex  flex-col">
          <div
            id="name"
            className=" basis-1/2 flex lg:flex-row justify-center align-middle "
          >
            <input
              placeholder="        First Name"
              className="m-5 w-64 lg:w-72 h-16 rounded-full bg-zinc-200"
            />
            <input
              placeholder="        Last  Name"
              className="m-5 w-64 lg:w-72 h-16 rounded-full bg-zinc-200"
            />
          </div>

          <div id="email">
            <input
              type="email"
              placeholder="         E-mail"
              className="m-5 w-64 -mt-16 lg:w-80 h-16 rounded-full bg-zinc-200"
            />
          </div>
          <input
            type="text"
            name="query"
            placeholder="       Got Any Questions?feel free to let us know"
            className="m-5 rounded-3xl h-44"
          />
          <button
            type="submit"
            className="text-teal-400 bg-white w-32 
            rounded-2xl ml-36 lg:ml-56 lg:w-44 lg:h-14 font-extrabold
             border-emerald-800 border-2 ease-in-out duration-200 hover:bg-emerald-800 hover:text-white
             cursor-none"
          >
            submit
          </button>
        </div>

        <div id="map" className=" basis-1/2 m-2 ml-48 ">
          <p className="text-white m-2 -mt-1">Locate Us?</p>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.637949618812!2d74.92246127409362!3d12.86664518743917!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba35945eed72a4f%3A0xe038073ace034b4!2sAgnihotri%20aerospace!5e0!3m2!1sen!2sin!4v1706783214756!5m2!1sen!2sin"
            allowfullscreen="true"
            loading="lazy"
            className="w-96 h-64 lg:w-96 lg:h-96 rounded-3xl inline-block"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
          <br />
          <br />
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}

export default Contact;
