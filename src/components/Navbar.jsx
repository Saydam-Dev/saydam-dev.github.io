const navLinkEls = document.querySelectorAll("id");

function Navbar(){

    return(
        <nav className="hidden lg:block" aria-label="sayfa-ici yonlendirmeler">
            <ul className="mt-12 w-max">
              <li>
                <a className="group flex items-center py-3" href="#hakkimda">
                  <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
                  <span className="nav-text text-base uppercase font-bold tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">Hakkımda</span>
                </a>
              </li>
              <li>
                <a className="group flex items-center py-3" href="#projeler">
                  <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
                  <span className="nav-text text-base uppercase font-bold tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">Projeler</span>
                </a>
              </li>
              <li>
                <a className="group flex items-center py-3" href="#iletisim">
                  <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
                  <span className="nav-text text-base uppercase font-bold tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">Bana Ulaşın</span>
                </a>
              </li>
            </ul>
          </nav>
    )
}

export default Navbar
