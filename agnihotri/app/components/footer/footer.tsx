import "./footer.css"  ;
import logo from "@/public/images/logo_white.png"
import Input from "./FooterInput";
import Items from "./FooterItems";
import Icons from "./FooterICons";

const width ='100%';
const height = '100%'  ;
export default function Footer () 
{
    return(
        <>
            <div className="flex bg-gray-950   pt-12 ">
                
                    <div className="basis-1/3 lg:basis-1/3 -mr-5 lg:-my-20">
                    <img src={"/images/logo_white.png"} className="inline-block l" />
                    </div>
                    
                    <div className="basis-5">
                        <div className="border-solid border-slate-500 " style={{borderWidth:'1px',
                                                                                        width:'2px',
                                                                                        height:'180px'
                                                                                        }}>

                        </div>
                    </div>

                    
                        <div className="basis-1/3 lg:basis-1/3 md:basis-1/5 lg:my-6 lg:ml-24">
                            <Input></Input>
                        </div>
                   

                    <div className="basis-5">
                        <div className="border-solid border-slate-500 " style={{borderWidth:'1px',
                                                                                        width:'2px',
                                                                                        height:'180px',
                                                                                        borderRadius:'100px'}}>

                        </div>
                    </div>

                    
                <div className="basis-1/3  md:basis-1/5 lg:basis-1/3 flex flex-col">
                             <div className="navigate">
                                <Items></Items>
                            </div>

                    <div className="basis-5">
                        <div className="border-solid hidden lg:inline-block border-slate-500 mx-4 my-2" style={{borderWidth:'1px',
                                                                                        width :'350px',
                                                                                        borderRadius:'100px'}}>
                                                                                    
                        </div>
                    </div>

                            <div className="icons">
                                <Icons></Icons>
                            </div>
                </div>
                    
            </div>
        </>
    )  ;

}
