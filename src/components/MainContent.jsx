import CurriculumVitae from "./CurriculumVitae";
import BottomBar from "./BottomBar";
import Experience from "./Experience";
import ParagrafSozlugu from "../data/ParagrafSozlugu.json";
import Projects from "./Projects";
import img1 from "../assets/sohbetkar.JPG";
import img2 from "../assets/hazineavi.jpg";
import img3 from "../assets/frc.png";
import Interests from "./Interests";

function MainContent(){
    return(
        <main className="pt-24 lg:w-[52%] lg:py-24 float-right flex flex-col items-center">
            <section id="hakkimda" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="Hakkimda">
                <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-[#0a192f] px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0 group-active:">
                    <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">Hakkımda</h2>
                </div>
                <div className="leading-7">
                    <p>Ben modern programcılık ve gelişen teknolojiye kolayca uyum sağlayabilen ve projelere hızlı adapte olabilen bir developerim. Üzerinde çalışmayı en sevdiğim projeler, detay gerektiren ve kusura yer vermeyecek projelerdir.</p>
                    <p>Projeler geliştirmeye erken yaşta başladığımdan katıldığım ve geliştirdiğim projeler genellikle başarıyla sonuçlanmış ve insanlara değer katan, yaşamlarını kolaylaştıran projeler olmuşlardır. Bunlardan bir tanesi uluslararası bir yarışma olan <b>"First Robotics Competition"</b>. Genç Türk programcılara ve Mekanikte ilerlemek isteyen öğrencilere bu alanda gelişmeleri için bir fırsat olmuştur.</p>
                    <p>Zamanımın büyük bir ölçeğini bilgisayar başında geçirsemde çalışmadığım zamanlarda arkadaşlarımla vakit geçirir, spor yapar, satranç turnuvalarına katılır, kitap okur, yada DST'nin büyük evreninde hayatta kalmaya çalışırım.</p>
                </div>
            </section>
            <section id="projeler" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
                <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-[#0a192f] px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0 group-active:">
                    <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">Projelerim</h2>
                </div>
                <ul className="group/list">
                    <Projects projeismi={ParagrafSozlugu.projeisimleri["proje1"]} resim={img1} briefexplanation={ParagrafSozlugu.briefexplanation["Sohbetkar"]}/>
                    <Projects projeismi={ParagrafSozlugu.projeisimleri["proje2"]} resim={img2} briefexplanation={ParagrafSozlugu.briefexplanation["HazineAvi"]}/>
                    <Projects projeismi={ParagrafSozlugu.projeisimleri["proje3"]} resim={img3} briefexplanation={ParagrafSozlugu.briefexplanation["FRC"]}/>
                </ul>
                <CurriculumVitae/>
            </section>
          
            <section id="tecrubelerim" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-24 lg:scroll-mt-24">
                <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-[#0a192f] px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0 group-active:">
                    <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">İş Tecrübelerim</h2>
                </div>
                <ul>
                    <Experience tecrubeismi="SGK - Sosyal Güvenlik Kurumu (Stajyer)" tecrubeparagrafi="Arşiv tarama ve kayıt görevlisi olarak ofis programları ve SGK’nın veri işleme için kullandıkları programların çalışma biçimi, bunların çalışma hayatında uygulanabilirliği ve geliştirilebilirliği hakkında tecrübe edindim." yildanyila="2020 - 2021"/>
                    <Experience tecrubeismi="FRC - First Robotics Competition (Alumni Captain)" tecrubeparagrafi="#8070 CyberGriffins isimli robotik takımımız en iyi genç programcı ve öğrencilerden oluşan bir robotik takımıdır. Takım çalışması, programlama dilleri, proje geliştirme gibi en iyi yetenekleri elde ettiğim bir çalışma tecrübemdir." yildanyila="2017 - 2022"/>
                </ul>
          </section>
          <section className="w-full space-y-4 py-8 mb-24">
              {/*
              //Bunu statikte yapmayalım  
              // <Contact/>
              */
              }
              <h4 className="p-5 text-lg font-semibold text-slate-200">Takip Ettiğim Teknolojiler</h4>

              <Interests title="Web Geliştirme"
                  items={[
                      { link: "https://react.dev/", title: "React", description: "Modern UI kütüphanesi" },
                      { link: "https://nextjs.org/", title:"NextJS", description: "Hızlı derleyici sağlayan bir React frameworku" },
                      { link: "https://tailwindcss.com/", title:"TailwindCSS", description: "CSS için stilleme frameworku" },
                      { link: "https://vite.dev/", title:"Vite", description: "Web için frontend build tool" },
                      { link: "https://gsap.com/", title:"GSAP", description: "Javascript animasyon kütüphanesi" },
                      { link: "https://threejs.org/", title:"ThreeJS", description: "Web için 3D animasyon kütüphanesi" },
                  ]}
              />
              <Interests title="Yazılım Geliştirme"
                  items={[
                      { link: "https://github.com/dotnet/wpf", title: "WPF", description: "UI destekli uygulama geliştirme frameworku" },
                      { link: "https://dotnet.microsoft.com/", title:"ASP.NET", description: "Yüksek performanslı backend frameworku" },
                      { link: "https://expressjs.com/", title:"ExpressJS", description: "NodeJS için web frameworku" },
                      { link: "https://socket.io/", title:"Socket.io", description: "Gerçek zamanlı uygulama geliştirme frameworku" },
                  ]}
              />
              {/* ...daha fazla öğrenmem gerektiği aşikar... */}
              <Interests title="Yapay Gerçeklik (AR/VR)"
                  items={[
                      { link: "https://www.unrealengine.com/xr", title: "Unreal XR", description: "Unreal Engine extended reality" },
                  ]}
              />
              <Interests title="Veritabanı"
                  items={[
                      { link: "https://www.mongodb.com/", title: "MongoDB", description: "Döküman tabanlı NoSQL veritabanı" },
                      { link: "https://www.postgresql.org/about/", title:"PostgreSQL", description: "Açık kaynaklı güçlü SQL veritabanı" },
                      { link: "https://www.prisma.io/", title:"Prisma", description: "Modern TypeScript ORM" },
                      { link: "https://orm.drizzle.team/", title:"Drizzle ORM", description: "Type-safe lightweight ORM" },
                      { link: "https://www.mysql.com/", title:"MySQL", description: "Açık kaynaklı ilişkisel veritabanı" },
                  ]}
              />

          </section>
          {/* Bu section footer olarak kalacak çünkü sticky page tasarlarken footer mainin içerisinde gözükür */}
          <footer className="max-w-md pb-16 text-sm text-slate-500 sm:pb-0">
              <BottomBar/>
          </footer>
      </main>
    )
}
export default MainContent