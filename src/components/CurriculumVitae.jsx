import cv from "../data/emirhancv.pdf"
import gsap from "gsap"
import { useRef, useEffect } from "react"

function CurriculumVitae(props){

    const cvRef = useRef(null);
    
    const hoverOlunca = () => {
        gsap.to(cvRef.current,
        {
            rotate:360,
            duration:1,
            yoyo:true,
        });
    };

    const hoverdanCikinca = () => {
        gsap.to(cvRef.current,
        {
            duration:1,
            rotate:-360,
        });
    };

    return(
    <>
        <div onMouseEnter={hoverOlunca} onMouseLeave={hoverdanCikinca} className="flex w-fit text-center mt-12 text-xl text-slate-200 py-4 rounded-full hover:text-amber-400 font-bold">
            <a href={cv} target="_blank" rel="noopener noreferrer">Curriculum Vitae'ye Gitmek İçin Tıkla &nbsp;</a><div ref={cvRef} ><a>(CV)</a></div>
        </div>
    </>
    )
}

export default CurriculumVitae