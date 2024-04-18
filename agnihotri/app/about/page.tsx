

import './about.css'; 


import Navigate from '../components/navigation/navigation';
import Footer from '../components/footer/footer';

const About = () => {
  return (
    <>
    <div className='navigate'>
        <Navigate></Navigate>
    </div>
    <h1 className="about ">About Us</h1>

    <div className="NameContainer 
    lg:w-[100%] lg:h-[100%] lg:mt-[100px] 
    flex gap-12 flex-col justify-center ">

      <div className="NameContent 
      lg:mr-[150px]
      ml-10 mr-10
       lg:ml-[150px] lg:flex 
      flex-row gap-8  pb-5 text-zinc-400 scale-50 opacity-30 animate-onScrollFade ">

      <img src={"/images/image1.jpg"} alt="" className='lg:hidden  
      rounded-3xl h-56   ' />
        <p className='inline-block border-b-2 p-3 pb-12 mt-2 text-base text-zinc-400'>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text
          ever since the 1500s, when an unknown printer took a galley of
          type and scrambled it to make a type specimen book. It has
          survived not only five centuries, but also the leap into
          electronic typesetting, remaining essentially unchanged. It was
          popularised in the 1960s with the release of Letraset sheets
          containing Lorem Ipsum passages, and more recently with desktop
          publishing software like Aldus PageMaker including versions of
          Lorem Ipsum.
        </p>
        <img src={"/images/image1.jpg"} alt="" className="w-80 lg:inline-block rounded-3xl  h-52 hidden" />
      </div>

      <div className="NameContent  scale-50 opacity-30 animate-onScrollFade
      lg:mr-[150px]
      ml-10 mr-10
       lg:ml-[150px] lg:flex 
      flex-row gap-8  pb-5 text-zinc-400">
        
        <img src={"/images/image2.jpg"} alt="" className='w-80 lg:inline-block rounded-3xl h-52 hidden' />
        <img src={"/images/image2.jpg"} alt="" className='lg:hidden w-80  rounded-3xl h-52 ' />
        <p className='inline-block text-base border-b-2 p-3 pb-12 mt-2 text-zinc-400'>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text
          ever since the 1500s, when an unknown printer took a galley of
          type and scrambled it to make a type specimen book. It has
          survived not only five centuries, but also the leap into
          electronic typesetting, remaining essentially unchanged. It was
          popularised in the 1960s with the release of Letraset sheets
          containing Lorem Ipsum passages, and more recently with desktop
          publishing software like Aldus PageMaker including versions of
          Lorem Ipsum.
        </p>
      </div>
      <div className="NameContent scale-50 opacity-30 animate-onScrollFade
      lg:mr-[150px]
       lg:ml-[150px] lg:flex 
       ml-10 mr-10
      flex-row gap-8  pb-5 text-zinc-400 mb-10">

      <img src={"/images/image3.jpg"} alt="" className='lg:hidden w-80  rounded-3xl h-52' />
        <p className='inline-block text-base border-b-2 p-3 pb-12 mt-2 text-zinc-400'>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text
          ever since the 1500s, when an unknown printer took a galley of
          type and scrambled it to make a type specimen book. It has
          survived not only five centuries, but also the leap into
          electronic typesetting, remaining essentially unchanged. It was
          popularised in the 1960s with the release of Letraset sheets
          containing Lorem Ipsum passages, and more recently with desktop
          publishing software like Aldus PageMaker including versions of
          Lorem Ipsum.
        </p>
        <img src={"/images/image3.jpg"} alt=""  
        className='w-80 lg:inline-block rounded-3xl 
        h-52 hidden '/>
      </div>
    </div>
    <div className="footer">
        <Footer></Footer>
    </div>
  </>
      
   
  );
};

export default About;
