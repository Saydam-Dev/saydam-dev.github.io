import CurriculumVitae from "./CurriculumVitae"
import BottomBar from "./BottomBar"
import Projects from "./Projects"
import Contact from "./Contact"
import ParagrafSozlugu from "../data/ParagrafSozlugu.json"

function MainContent(){
    return(
        <main className="pt-24 lg:w-[52%] lg:py-24 float-right flex flex-col items-center">
        <section id="hakkimda" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="Hakkimda">
          <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-[#0a192f] px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0 group-active:">
            <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">Hakkımda</h2>
          </div>
          <div className="leading-7">
            <p>Ben modern programcılık ve gelişen teknolojiye kolayca uyum sağlayabilen ve projelere hızlı adapte olabilen full-stack developerim. Üzerinde çalışmayı en sevdiğim projeler, detay gerektiren ve kusura yer vermeyecek projelerdir.</p>
            <p>Projeler geliştirmeye erken yaşta başladığımdan katıldığım ve geliştirdiğim projeler genellikle başarıyla sonuçlanmış ve insanlara değer katan, yaşamlarını kolaylaştıran projeler olmuşlardır. Bunlardan bir tanesi uluslararası bir yarışma olan <b>"First Robotics Competition"</b>. Genç Türk programcılara ve Mekanikte ilerlemek isteyen öğrencilere bu alanda gelişmeleri için bir fırsat olmuştur.</p>
            <p>Zamanımın büyük bir ölçeğini bilgisayar başında geçirsemde çalışmadığım zamanlarda arkadaşlarımla vakit geçirir, satranç turnuvalarına katılır, kitap okur, yada DST'nin büyük evreninde hayatta kalmaya çalışırım.</p>
          </div>
        </section>
        <section id="projeler">
          <Projects yildanyila="2024-Şimdi" projeismi={ParagrafSozlugu.projeisimleri["proje1"]} projelinki="https://www.github.com" projeparagrafi={ParagrafSozlugu.projeparagraflari["Sohbetkar"]}/>
          <Projects yildanyila="2024" projeismi={ParagrafSozlugu.projeisimleri["proje2"]} projelinki="https://www.github.com" projeparagrafi={ParagrafSozlugu.projeparagraflari["HazineAvi"]}/>
          <Projects yildanyila="2019-2023" projeismi={ParagrafSozlugu.projeisimleri["proje3"]} projelinki="https://www.firstinspires.org/robotics/frc" projeparagrafi={ParagrafSozlugu.projeparagraflari["FRC"]}/>
        </section>
        <CurriculumVitae name="Özgeçmiş - Curriculum Vitae (CV)"/>
        <section className="w-full">
          <Contact/>
        </section>
        <footer className="max-w-md pb-16 text-sm text-slate-500 sm:pb-0">
          <BottomBar/>
        </footer>
      </main>
    )
}
export default MainContent