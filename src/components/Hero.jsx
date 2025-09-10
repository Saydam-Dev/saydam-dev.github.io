import { useEffect, useRef } from "react";
import gsap from "gsap";
import Navbar from "./Navbar.jsx";
//import Projects from "./Projects.jsx";
//import ParagrafSozlugu from "../data/ParagrafSozlugu.json";
import SocialLinks from "./SocialLinks.jsx";
//import BottomBar from "./BottomBar.jsx";
//import CurriculumVitae from "./CurriculumVitae.jsx";
//import Contact from "./Contact.jsx";

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
          <h2 id="girisEfekti" className="text-lg font-medium tracking-tight text-slate-200 sm:text-xl">Full-Stack Developer</h2>
          <p className="mt-4 max-w-xs leading-normal font-normal">Yapmak istediğim her programı modern yöntemlerle geliştiriyorum.</p>
          <Navbar/>
        </div>
        <SocialLinks/>
      </header>
    </>
  );
}

export default Hero

/*<main className="pt-24 lg:w-[52%] lg:py-24 float-right flex flex-col items-center">
        <section id="hakkimda" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="Hakkimda">
          <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-[#0a192f] px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0 group-active:">
            <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">Hakkımda</h2>
          </div>
          <div className="leading-7">
            <p>Ben modern programcılık ve gelişen teknolojiye kolayca uyum sağlayabilen ve projelere hızlı adapte olabilen full-stack developerim. Üzerinde çalışmayı en sevdiğim projeler, detay gerektiren ve kusura yer vermeyecek projelerdir.</p>
            <p>Projeler geliştirmeye erken yaşta başladığımdan katıldığım ve geliştirdiğim projeler genellikle başarıyla sonuçlanmış ve insanlara değer katan, yaşamlarını kolaylaştıran projeler olmuşlardır. Bunlardan bir tanesi uluslararası bir yarışma olan <b>"First Robotics Competition"</b>. Resmi sitelerine gitmek için &gt; &nbsp;
              <a href="https://www.firstinspires.org/robotics/frc" id="link" className="font-bold text-base text-[#b4bcc8] underline italic hover:text-red-400">FRC</a>
            </p>
            <p>Çalışmadığım zamanlarda arkadaşlarımla vakit geçirir, kitap okur, yada DST'nin büyük evreninde hayatta kalmaya çalışırım.</p>
          </div>
        </section>
        <section id="projeler">
          <Projects yildanyila="2024-Şimdi" projeismi={ParagrafSozlugu.projeisimleri["proje1"]} projelinki="https://www.github.com" projeparagrafi={ParagrafSozlugu.projeparagraflari["Sohbetkar"]}/>
          <Projects yildanyila="2024" projeismi={ParagrafSozlugu.projeisimleri["proje2"]} projelinki="https://www.github.com" projeparagrafi={ParagrafSozlugu.projeparagraflari["HazineAvi"]}/>
          <Projects yildanyila="2019-2023" projeismi={ParagrafSozlugu.projeisimleri["proje3"]} projelinki="https://www.firstinspires.org/robotics/frc" projeparagrafi={ParagrafSozlugu.projeparagraflari["FRC"]}/>
        </section>
        <CurriculumVitae name="Özgeçmiş - Curriculum Vitae (CV)"/>
        <section className="w-1/3">
          <Contact/>
        </section>
        <footer className="max-w-md pb-16 text-sm text-slate-500 sm:pb-0">
          <BottomBar/>
        </footer>
      </main>*/