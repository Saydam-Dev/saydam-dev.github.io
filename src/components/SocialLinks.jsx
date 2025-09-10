import link1 from "../assets/goodreads.png"
import link2 from "../assets/github.png"
import link3 from "../assets/pinterest.png"
import link4 from "../assets/linkedin.png"

function SocialLinks(){

    return(
        <ul className="mt-12 flex items-center">
            <a href="https://www.goodreads.com/user/show/193454856-lord-7th-madyas-saydam" target="_blank" rel="noopener noreferrer">
                <li className="m-3 text-xs opacity-70 hover:opacity-100 transition-transform duration-300 hover:scale-125">
                    <img src={link1} alt="goodreads" style={{width:30, height:30, borderRadius:"20%"}}/>
                </li>
            </a>
            <a href="https://github.com/Saydam-Dev" target="_blank" rel="noopener noreferrer">
                <li className="m-3 text-xs opacity-70 hover:opacity-100 transition-transform duration-300 hover:scale-125">
                    <img src={link2} alt="github" style={{width:30, height:30, borderRadius:"20%", backgroundColor:"white"}}/>
                </li>
            </a>
            <a href="https://tr.pinterest.com/SaydamHype/" target="_blank" rel="noopener noreferrer">
                <li className="m-3 text-xs opacity-70 hover:opacity-100 transition-transform duration-300 hover:scale-125">
                    <img src={link3} alt="pinterest" style={{width:30, height:30, borderRadius:"20%", backgroundColor:"white"}}/>
                </li>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
                <li className="m-3 text-xs opacity-70 hover:opacity-100 transition-transform duration-300 hover:scale-125">
                    <img src={link4} alt="linkedin" style={{width:30, height:30, borderRadius:"20%", backgroundColor:"white"}}/>
                </li>
            </a>
        </ul>
    )
}
export default SocialLinks