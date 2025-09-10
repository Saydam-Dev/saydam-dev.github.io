import Hero from "./Hero.jsx";
import CursorRing from "./CursorRing.jsx";
import MainContent from "./MainContent.jsx";

function Layout(){

    return(
        <>
            <CursorRing/>
            <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-16 lg:py-0">
                <div className="lg:flex lg:justify-between lg:gap-4">
                    <Hero/>
                    <MainContent/>
                </div>
            </div>
        </>
    )
}

export default Layout