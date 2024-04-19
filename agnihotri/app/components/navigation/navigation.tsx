
'use client'
import Link from "next/link";
import  "./navigation.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import Menu from "./Menu";

function humbergclick()
{
  //onclick hidden and hide without it 
}
export default function Navigate() {

  return (
    <>
    <div className="hidden">
      <Menu></Menu>
    </div>
      <div className="">
        <div className="bg-slate-950 mx-0 my-0 px-0">
         <div className="flex flex-row ">
         <div className="basis-3/6 ">
            <Link href="/">
            <img src={"/images/logo_white.png"} className="inline-block lg:h-44 lg:-mt-10 -mt-5 " alt="" />
            </Link>
        
          </div>
          <div className="text-neutral-50  basis-3/6  flex align-middle justify-center lg:hidden ">
            <div onClick={humbergclick} className=" h-10 w-10 mt-5 ml-36">
        
              <FontAwesomeIcon icon={faBars} size='2xl'/>
            </div>
        
          </div>
          <div className="basis-3/4  hidden lg:inline-block flex justify-end ml-80">
          <div className="links ml-38 translate-x-16 mt-10">
            <div className="div1">
              <Link href="/launch">Launch</Link>
            </div>
            <div className="div1">
              <Link href="/gallery" >Gallery</Link>
            </div>
            <div className="div1">
              <Link href="/about" >About</Link>
            </div>
            <div className="div1">
              <Link href="/product">Product </Link>
            </div>
            <div className="div1">
              <Link href="/work">Work With Us </Link>
            </div>
            <div className="div1">
              <Link href="/contact">Contact </Link>
            </div>
          </div>
          </div>
         </div>
        </div>
      </div>
    </>
  );
}





