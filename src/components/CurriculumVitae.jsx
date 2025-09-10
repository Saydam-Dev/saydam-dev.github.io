import cv from "../data/emirhancv.pdf"
import gsap from "gsap"
import { useRef, useEffect } from "react"

function CurriculumVitae(props){

    const cvRef = useRef(null);
    
    const hoverOlunca = () => {
        gsap.to(cvRef.current,
        {
            duration:1,
            scale:1.2
        });
    };

    const hoverdanCikinca = () => {
        gsap.to(cvRef.current,
        {
            duration:1,
            scale:1
        });
    };

    return(
    <>
        <div ref={cvRef} onMouseEnter={hoverOlunca} onMouseLeave={hoverdanCikinca} className="w-fit text-center my-12 text-xl text-slate-200 p-4 rounded-full hover:text-amber-400 font-bold">
            <a href={cv} target="_blank" rel="noopener noreferrer">{props.name}</a>
        </div> 
    </>
    )
}

export default CurriculumVitae