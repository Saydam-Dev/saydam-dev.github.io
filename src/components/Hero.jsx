import { useEffect } from "react";
import gsap from "gsap";
import Navbar from "./Navbar.jsx";
import SocialLinks from "./SocialLinks.jsx";


function Hero() {

    useEffect(() => {
    gsap.fromTo("#girisEfekti",
    {
        opacity:0,
        y:-50,
        duration:1,
        visibility:"visible"
    },
    {
      opacity:1,
      ease:"power4.out",
      duration:2,
      y:0,
    });
  },[])

  return (
    <>
      <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[48%] lg:justify-between lg:flex-col lg:py-24">
        <div>
          <h1 id="girisEfekti" className="text-5xl font-bold tracking-tight text-slate-200 sm:text-5xl pb-3"><a href="/">Emirhan Ömür Keleş</a></h1>
          <h2 id="girisEfekti" className="text-lg font-medium tracking-tight text-slate-200 sm:text-xl">Web Developer</h2>
          <p className="mt-4 max-w-xs leading-normal font-normal">Yapmak istediğim programları modern yöntemlerle geliştiriyorum.</p>
          <Navbar/>
        </div>
        <SocialLinks/>
      </header>
    </>
  );
}

export default Hero