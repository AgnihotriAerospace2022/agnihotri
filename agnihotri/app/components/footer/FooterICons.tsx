
import  "./footer.css"  ;
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram ,faYoutube,faTwitter,faSquareFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { brands} from "@fortawesome/fontawesome-svg-core/import.macro";


export default function Icons()
{
    return (<>
         <div className="flex hidden lg:inline-block lg:ml-10">
                                 <a href="#" className="basis-12 mx-1 hover:opacity-30" >
                                    <FontAwesomeIcon icon={faInstagram } size="2xl" style={{color: "#ffffff",}} />
                                </a>
                                <a href="#" className="basis-12 mx-1 hover:opacity-30">
                                    <FontAwesomeIcon icon={faSquareFacebook} size="2xl" style={{color: "#ffffff",}} />
                                </a>
                                <a href="#" className="basis-12 mx-1 hover:opacity-30">
                                    <FontAwesomeIcon icon={faLinkedin} size="2xl" style={{color: "#ffffff",}} />
                                </a>
                                <a href="#" className="basis-12 mx-1 hover:opacity-30">
                                    <FontAwesomeIcon icon={faTwitter} size="2xl" style={{color: "#ffffff",}} />
                                </a>
                                <a href="#" className="basis-12 mx-1 hover:opacity-30">
                                    <FontAwesomeIcon icon={faYoutube} size="2xl" style={{color: "#ffffff",}} />
                                </a>
                                
            </div>
            <div className="flex  lg:hidden ">
                                 <a href="#" className="basis-6 hover:opacity-30" >
                                    <FontAwesomeIcon icon={faInstagram } size="lg" style={{color: "#ffffff",}} />
                                </a>
                                <a href="#" className="basis-6 hover:opacity-30">
                                    <FontAwesomeIcon icon={faSquareFacebook} size="lg" style={{color: "#ffffff",}} />
                                </a>
                                <a href="#" className="basis-6 hover:opacity-30">
                                    <FontAwesomeIcon icon={faLinkedin} size="lg" style={{color: "#ffffff",}} />
                                </a>
                                <a href="#" className="basis-6 hover:opacity-30">
                                    <FontAwesomeIcon icon={faTwitter} size="lg" style={{color: "#ffffff",}} />
                                </a>
                                <a href="#" className="basis-6 hover:opacity-30">
                                    <FontAwesomeIcon icon={faYoutube} size="lg" style={{color: "#ffffff",}} />
                                </a>
                                
            </div>
            <h5 className="text-slate-50 lg:my-5 lg:ml-14 text-xs -ml-2 lg:text-lg">agnihotri@gmail.com</h5>
    </>) ;
}