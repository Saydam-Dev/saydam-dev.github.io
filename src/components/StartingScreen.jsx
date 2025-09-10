import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(TextPlugin);

function StartingScreen() {
  const linesRef = useRef([]);
  const texts = [
      "Saydam BIOS Extension v1.0A",
      "Copyright (C) 2025 Saydam Software, Inc.",
      "Loading modules...",
      "Detecting IDE Primary Master...",
      "Detecting IDE Secondary Master...",
      "Verifying DMI Pool Data...",
      "Starting SF-DOS...", //SaydamSoftware Disk Operating System
      "SF-Domain Expansion!!!",
      ];

  useEffect(() => {
    const tl = gsap.timeline();

    texts.forEach((t, i) => {
      tl.to(linesRef.current[i], {
        text: t,
        duration: t.length * 0.01, // harf başına süre
        ease: "power4.in"
      });
    });
  }, []);

  useEffect(() => {
    gsap.to("#zoomInBox",
    {
      delay:5,
      scale:1000,
      duration:1,
      opacity:1,
      ease: "none",
      backgroundColor: "#0f172a",
    });
  },[])
  

  return (
    <>
      <div className="h-screen w-screen flex flex-col justify-center bg-black text-green-500 font-mono p-8 text-2xl">
        {texts.map((_, i) => (<span key={i} ref={(el) => (linesRef.current[i] = el)}/>))}
          <span id="zoomInBox" className="w-1 h-1 bg-[#0a192f] text-center fixed rounded-full self-center opacity-0"></span>
      </div>        
    </>
  );
}

export default StartingScreen;
